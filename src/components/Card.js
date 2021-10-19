import React from 'react';
import './Card.css';

const Card = ({email, username, id, name}) => {
    return (
        //This html like syntax is JSX
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div id='word-wrap'>
                <h2>{name}</h2>
                <p>{username}
                    <br></br>
                    {email}
                </p>
            </div>
        </div>
    );
}

export default Card;