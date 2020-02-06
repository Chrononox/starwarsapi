import React from 'react';
import Card from './Card'

class ShipList extends React.Component{

    constructor(){
        super()
        this.state ={
            shipList: [],
            isActive: false,
        }
    }
    componentDidMount(){
        fetch('https://swapi.co/api/starships/')
        .then(resp => resp.json())
        .then(ships => this.setState({shipList: ships.results}))
        .catch(err => console.log(`X.X ${err}`))
    }

    // ToggleData = (event) => this.setState({isActive: !this.state.isActive})

    render(){

        const shipCards = this.state.shipList.map((ship, i) =>{
            return <Card key={i} name={ship.name} shipClass={ship.starship_class} />
        })

        if(this.state.shipList.length === 0){
            return <h1>O.O loading... O.O</h1>
        }else if(this.state.isActive){
            console.log("yeah")
        }else{
            return(
                <div>
                    <h1>Click for more info</h1>
                   {shipCards}
                </div>
                
                
            )
        }
       
    }
}
export default ShipList;

//shiplist get data and make cards, pass data to cards