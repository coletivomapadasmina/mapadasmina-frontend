import React, { Component } from 'react';
import Nav from './Componentes/Nav/Nav';
import Header from './Componentes/Header/Header';
import './App.css';
import { Map } from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <p className="App-intro">

        </p>
        <Map isMarkerShown />
      </div>
    );
  }
}

export default App;
