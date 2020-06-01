import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card';
import ActionButton from './Components/ActionButton';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: new Set()
    }

    this.AddCard = this.AddCard.bind(this);
  }

  AddCard() {
    this.setState((st) => ({
      cards: st.cards.add(<Card imgUrl="abc.com" name="Dummy Name" popularity="10.01575"/>)
    }));
  }

  render() {
    return (
      <div className="App">
        <table id="mainTable">
          <thead>
            <tr>
              <td>Image</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.cards}
          </tbody>
        </table>
        <ActionButton actionName={this.AddCard}/>
      </div>
    );
  }
}

export default App;
