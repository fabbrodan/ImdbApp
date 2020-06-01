import Card from './Card';
import React, { Component } from 'react';
import Data from '../Data/imdb.json';
import ActionButton from './ActionButton';
import '../Styling/CardCollection.css';

class CardCollection extends Component {
    constructor() {
        super();
        this.CardMap = Data.map(obj => {
            return (<Card key={obj.name} name={obj.name} imgUrl={obj.pictureUrl} popularity={obj.popularity}/>)
        });

        this.state = {
            Cards: []
        }

        this.AddCard = this.AddCard.bind(this);
    }


    AddCard = (e) => {
        var randomIndex = Math.floor(Math.random() * this.CardMap.length);
        this.setState({
            st: this.state.Cards.push(this.CardMap[randomIndex])
        });
    }

    OrderByName = () => {
        console.log("Order by name pressed");
    }

    OrderByPopularity = () => {
        console.log("Order by popularity pressed");
    }

    render() {
        return (
            <div>
                <table id="mainTable">
                <thead>
                    <tr>
                    <td>Image</td>
                    <td><ActionButton actionName={this.OrderByName} textValue="Name"/></td>
                    <td><ActionButton actionName={this.OrderByPopularity} textValue="Popularity"/></td>
                    <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                {this.state.Cards}
                </tbody>
                </table>
                <ActionButton actionName={this.AddCard} textValue="Add Actor"/>
            </div>
        )
    }
}

export default CardCollection;