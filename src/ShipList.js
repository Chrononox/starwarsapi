import React from 'react';
import Card from './Card'

class ShipList extends React.Component{

    constructor(){
        super()
        this.state ={
            taco: 'yum',
            shipList: [],
        }
    }
    componentDidMount(){
        fetch('https://swapi.co/api/starships/')
        .then(resp => resp.json())
        .then(ships => this.setState({shipList: ships.results}))
        .catch(err => console.log(`X.X ${err}`))
    }

    render(){
        if(this.state.shipList.length === 0){
            return <h1>loading...</h1>
        }else{
            return(
                <div>
                    {console.log(this.state.shipList)}
                    <Card shiplist={this.state.shipList}/>
                </div>
                
            )
        }
       
    }
}
export default ShipList;

//shiplist get data and make cards, pass data to cards