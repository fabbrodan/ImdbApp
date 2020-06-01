import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: new Array()
    }

    this.AddCard = this.AddCard.bind(this);
  }

  AddCard(Card) {
    this.state.cards.push(Card);
  }

  render() {
    return (
      <div className="App">
        <table id="mainTable">
          <thead>
            <td>Image</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Action</td>
          </thead>
          {this.state.cards}
        </table>
      </div>
    );
  }
}

export default App;
