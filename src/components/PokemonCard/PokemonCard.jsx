import React, { useState, useEffect } from "react";
import Detail from '../Detail/Detail';
import './PokemonCard.css';
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
  }, [name]);

  return (
    <div>
    
      {
        fetching ? <div>loading...</div> :
         <a onClick={() => setDetail(!detail)} >
         {
          !detail ? <div className="pokemonCard">
        <div className="body">

         <img src={state.sprites["front_default"]} /> 
        </div>
        <div className="cardFooter" >

           <div className="pokemonName"><p>{state.name}</p></div>
           <div className="pokemonNumber"><p>#{state.id}</p></div>
        </div>
         </div> : <Detail pokemon={state} sprite={state.sprites["back_default"]} />
        }
         
         </a>
        }
       
    </div>
  );
};

export default PokemonCard;
