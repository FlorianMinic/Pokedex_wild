import { useState } from 'react';
import "./App.css";

import PokemonCard from "./components/pokemonCard";

function App() {

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
const [pokemonIndex, setPokemonIndex] = useState(0);

const handlePrevious = () => {
  setPokemonIndex((prevIndex) => 
    prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1
  );
};

const handleNext = () => {
  setPokemonIndex((prevIndex) => 
    (prevIndex + 1) % pokemonList.length
  );
};

return (
  <>
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <div>
        {}
        {pokemonIndex > 0 && (
          <button onClick={handlePrevious}>Précédent</button>
        )}
        {}
        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={handleNext}>Suivant</button>
        )}
      </div>
    </div>
  </>
);
}

export default App;