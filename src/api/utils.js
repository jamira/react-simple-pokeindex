/**
 * Fetches first 150 Pokemon and returns an array of obejcts,
 * where each object represents a Pokemon.
 *
 * @returns {Array.<{
 *   name: string,
 *   url: string
 * }>}
 */
export async function getPokemonList() {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`
  ).then((res) => res.json());
  return data.results;
}

/**
 * @returns {string} Short description of Pokemon
 */
export async function getPokemonDescription(name) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  ).then((res) => res.json());

  return {
    text: pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, ' '),
    name: pokemon.name,
  };
}

/**
 * Returns URL of a Pokemon sprite image
 */
export function getPokemonSpriteUrl(name) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${name}.png`;
}
