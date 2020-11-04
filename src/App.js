import React, { useState } from "react";
import Header from "./components/Header/Header";
import SearchPokemon from "./components/SearchPokemon/SearchPokemon";
import ViewPokemon from "./components/ViewPokemon/ViewPokemon";
import './App.css';
import useFetch from './Hooks/FetchHook';

const App = () => {
  const [filterInput, setFilterInput] = useState("");
  const {data, loading} = useFetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");


  const onSearchHandler = (event) => {
    setFilterInput(event.target.value.toLowerCase());
  };

  const filteredPokemons = () => {
    const filtered = data.results.filter((pokemon) =>
      pokemon.name.includes(filterInput)
    );
    return filtered;
  };

  return (
    <div className="container">
      <Header />
      {!loading ? (
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
