import React, { useState } from "react";
import Detail from "../Detail/Detail";
import "./PokemonCard.css";
import useFetch from "../../Hooks/FetchHook";
const PokemonCard = ({ pokemon }) => {
  const { url } = pokemon;
  const [detail, setDetail] = useState(false);
  const { data} = useFetch(url);
  return (
    <div>
      {!data ? (
        <div>loading...</div>
      ) : (
        <a onClick={() => setDetail(!detail)}>
          {!detail ? (
            <div className="pokemonCard">
              <div className="body">
                <img alt="pokemon" src={data.sprites["front_default"]} />
              </div>
              <div className="cardFooter">
                <div className="pokemonName">
                  <p>{data.name}</p>
                </div>
                <div className="pokemonNumber">
                  <p>#{data.id}</p>
                </div>
              </div>
            </div>
          ) : (
            <Detail pokemon={data} sprite={data.sprites["back_default"]} />
          )}
        </a>
      )}
    </div>
  );
};

export default PokemonCard;
