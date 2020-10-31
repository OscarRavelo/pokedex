import React from "react";
import './SearchPokemon.css';
const SearchPokemon = ({handler}) => {
    
    
    return(
        
        <div className="SearchPokemon" >
    <input className="SearchInput" type="text" placeholder="Search" onChange={handler} />
  
    </div>
)

}
export default SearchPokemon;
