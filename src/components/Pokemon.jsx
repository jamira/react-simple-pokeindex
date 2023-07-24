import React from 'react';

const Pokemon = ({ name, description, image }) => {
  return (
    <div className="pokemon">
      <div className="details">
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Pokemon;
