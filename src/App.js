import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import Tabs from './Components/Tabs/Tabs.js';
import './App.css';
import MapWrapper from './Components/Map/MapWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />

        <Tabs />
        <MapWrapper isMarkerShown />
      </div>
    );
  }
}

export default App;
