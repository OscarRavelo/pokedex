import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchPokemon from "./components/SearchPokemon/SearchPokemon";
import ViewPokemon from "./components/ViewPokemon/ViewPokemon";

const App = () => {
  const [state, setState] = useState(null);
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
      );
      const data = await response
        .json()
        .then((stateData) => setState(stateData.results));
    };

    fetching();
    console.log(state);
  }, []);

  const onSearchHandler = (event) => {
    setFilterInput(event.target.value.toLowerCase());
  };

  const filteredPokemons = () => {
    const filtered = state.filter((pokemon) =>
      pokemon.name.includes(filterInput)
    );
    return filtered;
  };

  return (
    <div className="container">
      <Header />
      {state ? (
        <div>
          <SearchPokemon handler={onSearchHandler} />
          {<ViewPokemon pokemons={(filteredPokemons())} />}
        </div>
      ) : (
        <div>...loading</div>
      )}
    </div>
  );
};

export default App;
