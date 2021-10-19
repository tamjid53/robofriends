import React from 'react';
import Card from './Card.js';

//Created a CardList component that list cards
const CardList = ({robots}) => {
    //Looping through each user from './robots.js' and returning values
    return (
        <div>
            {
            robots.map((user, i) => {
                return (
                    <Card
                        key={user.id}
                        id={robots[i].id}
                        name={robots[i].name}
                        username={robots[i].username}
                        email={robots[i].email}
                    />
                );
            })
            }
        </div>
    );
}
 export default CardList;
