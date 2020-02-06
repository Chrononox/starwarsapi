import React from 'react';
import './Card.css';

class Card extends React.Component{

    render(){
        return(
            <div className="card">
                <h1>Name: {this.props.name}</h1>
                <h2>class {this.props.shipClass}</h2>                
            </div>
        )
    }
}

export default Card;

//when card is clicked expand and show detailed info and add button to close the larger card