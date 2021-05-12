import React from "react";

const PokemonCard = ({ pokemon }) => {
  const { front_default } = pokemon.sprites
  return (
    <div>
      <p>Name: {pokemon.name}</p>
      <img src={front_default} alt={pokemon.name} />
      <p>ID {pokemon.id}</p>
    </div>
  );
};

export default PokemonCard;
