import React from 'react';
import Characters from './Characters';

const CharacterCard = props => {
    return (
        <div className="cards">
            {props.character.map(chars =>
                <Characters key={chars.created}
                character={chars}
                />
                )}
        </div>
    )
}

export default CharacterCard;