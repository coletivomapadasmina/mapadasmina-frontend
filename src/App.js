import React, { Component } from 'react';
import Nav from './Componentes/Nav/Nav';
import Header from './Componentes/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
