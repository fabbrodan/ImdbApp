import Card from './Card';
import React, { Component } from 'react';
import Data from '../Data/imdb.json';
import ActionButton from './ActionButton';
import '../Styling/CardCollection.css';

class CardCollection extends Component {
    constructor() {
        super();
        this.CardMap = Data.map(obj => {
            return (<Card key={obj.name} name={obj.name} imgUrl={obj.pictureUrl} popularity={obj.popularity} action={this.DeleteActor}/>)
        });

        this.state = {
            Cards: []
        }
    }

    componentDidMount() {
        for (var i = 0; i < 5; i++) {
            this.AddCard();
        }
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        document.getElementById("endOfTable").scrollIntoView({behavior: "smooth"});
    }


    AddCard = () => {
        var randomIndex = Math.floor(Math.random() * this.CardMap.length);
        this.setState({
            state: this.state.Cards.push(this.CardMap[randomIndex])
        });
        this.CardMap.splice(randomIndex, 1);
    }

    OrderByName = () => {
        this.setState({
            state: this.state.Cards.sort(function(a, b) {
                if (a.props.name.toLowerCase() < b.props.name.toLowerCase()) {
                    return -1;
                }
                if (a.props.name.toLowerCase() > b.props.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            })
        });
    }

    OrderByPopularity = () => {
        this.setState({
            state: this.state.Cards.sort(function(a, b) {
                return b.props.popularity - a.props.popularity;
            })
        });
    }

    DeleteActor = (id) => {
        var match = this.state.Cards.find(obj => {
            return obj.key === id;
        });
        var index = this.state.Cards.indexOf(match);
        this.setState({
            state: this.state.Cards.splice(index, 1)
        })
    }

    render() {
        return (
            <div id="tableDiv">
                <table id="mainTable">
                <thead>
                    <tr>
                    <th>Image</th>
                    <th><ActionButton actionName={this.OrderByName} textValue="Name"/></th>
                    <th><ActionButton actionName={this.OrderByPopularity} textValue="Popularity"/></th>
                    <th>Action</th>
                    <th><ActionButton identifier="addActor-btn" actionName={this.AddCard} textValue="Add Actor"/></th>
                    </tr>
                </thead>
                <tbody>
                {this.state.Cards}
                </tbody>
                </table>
                <div id="endOfTable"></div>
            </div>
        )
    }
}

export default CardCollection;