import React from 'react';

const Detail = ({pokemon}) => {
    const {abilities, types} = pokemon;
    return(
    <div>
        <div>
            <p>abilities</p>
            <ul>
                {
                    abilities.map((ability, i )=> <li key={i}>{ability.ability.name}</li>)
                }
            </ul>
        </div>
        <div>
            <p>Type</p>
            <ul>
                {
                    types.map((type, i )=> <li key={i}>{type.type.name}</li>)
                }
            </ul>
        </div>
    </div>
)}

export default Detail;