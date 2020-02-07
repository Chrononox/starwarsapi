import React from 'react';
import './Card.css';

class Card extends React.Component{

    
    render(){
        
        return(
            <div className="card">
                <h1>Name: {this.props.name}</h1>
                <h2>Class: {this.props.shipClass}</h2>
                <p>manufacturer: {this.props.manufacturer}</p>
                <p>crew: {this.props.crew}</p>
                <p>hyperdrive rating {this.props.hyperdrive}</p>
            </div>
        )
    }
}

export default Card;
//if false display 1 else display 2 
//change on mouseover

//when card is clicked expand and show detailed info and add button to close the larger card