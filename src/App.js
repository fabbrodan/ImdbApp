import React, { Component } from 'react';
import './App.css';
import CardCollection from './Components/CardCollection';
import Header from './Components/Header'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header title="IMDb App" />
        <CardCollection/>
      </div>
    );
  }
}

export default App;
