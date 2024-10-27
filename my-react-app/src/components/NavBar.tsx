interface NavBarProps {
    pokemonList: { name: string; imgSrc?: string | null }[];
    onPokemonSelect: (index: number) => void;
  }
  
  function NavBar({ pokemonList, onPokemonSelect }: NavBarProps) {
    return (
      <div>
        {pokemonList.map((pokemon, index) => (
          <button key={pokemon.name} onClick={() => onPokemonSelect(index)}>
            {pokemon.name}
          </button>
        ))}
      </div>
    );
  }
  
  export default NavBar;
  
  