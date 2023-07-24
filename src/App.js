import React, { useState, useEffect, useCallback } from 'react';
import './style.css';
import Select from './components/Select';
import Pokemon from './components/Pokemon';
import Buttons from './components/Buttons';
import {
  getPokemonList,
  getPokemonDescription,
  getPokemonSpriteUrl,
} from '../api/utils';
import debounce from 'lodash/debounce';

export default function App() {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [pokemonData, setPokemonData] = useState({
    name: '',
    description: '',
    image: '',
  });
  const debouncedHandleChange = debounce(handleChange, 500); // Debounced handleChange function

  useEffect(() => {
    // Fetch Pokemon list only once
    const fetchPokemonList = async () => {
      const list = await getPokemonList();
      setPokemonNames(list);
    };
    fetchPokemonList();
  }, []);

  useEffect(() => {
    // Fetch Pokemon data using memoized function
    fetchPokemonDataMemoized(currentId);
  }, [currentId]);

  const fetchPokemonData = async (id) => {
    const pokemonDesc = await getPokemonDescription(id);
    const pokemonImg = await getPokemonSpriteUrl(id);
    setPokemonData({
      name: pokemonDesc.name,
      description: pokemonDesc.text,
      image: pokemonImg,
    });
  };

  // Memoize the fetchPokemonData function using useCallback
  const fetchPokemonDataMemoized = useCallback(fetchPokemonData, []);

  function handleChange(event) {
    setCurrentId(Number(event.target.value));
  }

  const handlePrev = () => {
    setCurrentId((currentId) => currentId - 1);
  };

  const handleNext = () => {
    setCurrentId((currentId) => currentId + 1);
  };

  return (
    <>
      <Select pokemons={pokemonNames} handleChange={debouncedHandleChange} />
      <Pokemon
        name={pokemonData.name}
        description={pokemonData.description}
        image={pokemonData.image}
      />
      <Buttons
        handlePrev={handlePrev}
        handleNext={handleNext}
        currentId={currentId}
      />
    </>
  );
}
