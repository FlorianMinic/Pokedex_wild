interface NavBarProps {
    pokemonList: { name: string; imgSrc?: string | null }[];
    onPokemonSelect: (index: number) => void;
  }
  
  function NavBar({ pokemonList, onPokemonSelect }: NavBarProps) {
    return (
      <div>
        {pokemonList.map((pokemon, index) => (
          <button
            key={pokemon.name}
            onClick={() => {
              if (pokemon.name === "pikachu") {
                alert("pika pikachu !!!");
              }
              onPokemonSelect(index);
            }}
          >
            {pokemon.name}
          </button>
        ))}
      </div>
    );
  }
  
  export default NavBar;
  
  
  