import React, { useState, useEffect } from "react";
import Detail from '../Detail/Detail';

const PokemonCard = ({ pokemon }) => {
  const { name, url } = pokemon;
  const [state, setState] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [detail, setDetail] = useState(false);

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(url);
      const data = await response.json().then(d => setState(d)).then(() =>setFetching(!fetching) );
      
      

    };
    fetching();
  }, [state, name]);

  return (
    <div>
    
      {
        fetching ? <div>loading...</div> : <a onClick={() => setDetail(!detail)} ><h1>{state.name}</h1><img src={state.sprites["front_default"]} /> </a>
        }
        {
          !detail ? <div></div> : <Detail pokemon={state} />
        }
    </div>
  );
};

export default PokemonCard;
