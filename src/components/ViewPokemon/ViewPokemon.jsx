import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import './ViewPokemon.css';
const ViewPokemon = ({ pokemons }) => {
  return (<div className="viewpokemoncontainer">
    
      
        {
          pokemons.length !== 0 ? 
          pokemons.map((pokemon, i) => (
            <PokemonCard key={i} pokemon={pokemon} />
          )) : <div>Pokemon not found</div>
        }
        
    
  </div>
)
  }
export default ViewPokemon;
