import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
const ViewPokemon = ({ pokemons }) => {
  return (<div>
    
      
        {
          pokemons ? 
          pokemons.map((pokemon, i) => (
            <PokemonCard key={i} pokemon={pokemon} />
          )) : <div>fetching...</div>
        }
        
    
  </div>
)
  }
export default ViewPokemon;
