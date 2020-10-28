import React from "react";

const SearchPokemon = ({handler}) => {
    
    
    return(
        
        <form >
    <input type="text" placeholder="Search" onChange={handler} />
  
    </form>
)

}
export default SearchPokemon;
