import React, { useState, useEffect } from "react";

const PokemonCard = ({ pokemon }) => {
  const { name, url } = pokemon;
  const [state, setState] = useState(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setState(data.sprites["front_default"]);
      setFetching(!fetching);

      console.log("state", data.sprites["front_default"]);
    };
    fetching();
  }, [state]);

  return (
    <div>
    <h1>{name}</h1>
      {
        fetching ? <div>loading...</div> : <img src={state} />
        }
    </div>
  );
};

export default PokemonCard;
