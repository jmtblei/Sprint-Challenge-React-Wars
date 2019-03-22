import React from 'react';
import './StarWars.css';

const Characters = props => {
    return (
        <div className="characters">
            <h2>Name: {props.character.name}</h2>
            <p>Gender: {props.character.gender}</p>
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Species: {props.character.species}</p>
        </div>
    )
}

export default Characters;