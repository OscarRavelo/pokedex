import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchPokemon from "./components/SearchPokemon/SearchPokemon";
import ViewPokemon from "./components/ViewPokemon/ViewPokemon";

const App = () => {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    const fetching = async() => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
      const data = await response.json();
      setState(data.results.flat());
       
    }

    fetching();
  }, [state])

  return (
    <div className="container">
      <Header />
      {state ? (
        <div>
          <SearchPokemon  />
          {<ViewPokemon pokemons={state} />}
        </div>
      ) : (
        <div>...loading</div>
      )}
    </div>
  );
};

export default App;
