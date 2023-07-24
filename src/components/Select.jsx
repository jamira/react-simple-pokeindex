import React from 'react';

const Select = ({ pokemons, handleChange }) => {
  return (
    <div className="select">
      <select name="pokemons" id="pokemons" onChange={handleChange}>
        {pokemons?.map(({ name }, index) => {
          return (
            <option value={index + 1} key={index} data-name={name}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
