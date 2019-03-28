import React from 'react';
import './StarWars.css';
import Species from './Species';

const Characters = props => {
    return (
        <div className="characters">
            <h2>{props.character.name}</h2>
            <p>Gender: {props.character.gender}</p>
            <p>Birth Year: {props.character.birth_year}</p>
                {props.character.species.map((res, index) => (
                <Species key={index}
                species = {res} 
                />
                ))}
        </div>
    )
}

export default Characters;