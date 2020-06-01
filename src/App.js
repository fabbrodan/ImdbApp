import React, { Component } from 'react';
import './App.css';
import CardCollection from './Components/CardCollection';
import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header title="IMDb App" />
        <CardCollection/>
        <Footer footerText="Daniel Åslund - 2020" />
      </div>
    );
  }
}

export default App;
