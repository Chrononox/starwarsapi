import React from 'react';
import './Card.css';

class Card extends React.Component{

    
    render(){
        
        return(
            <div className="card">
                <h2>Name: {this.props.name}</h2>
                <h3>Class: {this.props.shipClass}</h3>
                {/* <p>Manufacturer: {this.props.manufacturer}</p>
                <p>Crew: {this.props.crew}</p>
                <p>Hyperdrive Rating: {this.props.hyperdrive}</p> */}
                <p>Built by {this.props.manufacturer}. Requires {this.props.crew} crew to operate. The {this.props.name} has a hyperdrive rating of {this.props.hyperdrive}.</p>
            </div>
        )
    }
}

export default Card;
//if false display 1 else display 2 
//change on mouseover

//when card is clicked expand and show detailed info and add button to close the larger card