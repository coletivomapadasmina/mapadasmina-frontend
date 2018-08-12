import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import './App.css';
import MapWrapper from './Components/Map/MapWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <p className="App-intro">

        </p>
        <MapWrapper isMarkerShown />
      </div>
    );
  }
}

export default App;
