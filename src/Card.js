import React from 'react';

const Card = (shiplist) =>{
    return(
        <div>
            <h1>Name: {shiplist[0]}</h1>
            <h2>class</h2>
        </div>
    )
}

export default Card;

//when card is clicked expand and show detailed info and add button to close the larger card