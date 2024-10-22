import React from 'react';

const PokemonCard: React.FC = () => {
  return (
    <figure className="pokemon-card">
      <img 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
        alt="Bulbasaur" 
        className="pokemon-card__image" 
      />
      <figcaption className="pokemon-card__caption">Bulbasaur</figcaption>
    </figure>
  );
};

export default PokemonCard;

