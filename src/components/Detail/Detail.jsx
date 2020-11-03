import React from 'react';
import './Detail.css';

const Detail = ({pokemon, sprite}) => {
    const {abilities, types} = pokemon;
    return(
    <div className="pokemonCard">
    <div className="detail__body" >
        <div>

        
        <div className="abilities">
            <p>abilities</p>
            <ul>
                {
                    abilities.map((ability, i )=> <li key={i}>{ability.ability.name}</li>)
                }
            </ul>
        </div>
        <div className="type">
            <p>type</p>
            <ul>
                {
                    types.map((type, i )=> <li key={i}>{type.type.name}</li>)
                }
            </ul>
        </div>
        </div>
        <div>
            <img src={sprite} />
        </div>
    </div>
    </div>
)}

export default Detail;