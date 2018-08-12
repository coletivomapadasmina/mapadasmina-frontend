import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import Tabs from './Components/Tabs/Tabs.js';
import './App.css';
import MapWrapper from './Components/Map/MapWrapper';

class App extends Component {
  state = {
    candidates: [],
    checked: [],
  }

  componentDidMount() {
    fetch('https://mapadasminas-api.herokuapp.com/candidates.json')
      .then(res => res.json())
      .then(data => this.setState({ candidates: data }))
      .catch(err => console.log('err: ', console.log('error: ', err)))
  }

  onChange(e) {
    console.log('cause: ', e.target.id, e.target.checked)
    // const item = e.target
    // const checked = this.state.checked

    // if (item.checked) {
    //   checked.push(item.id)
    // }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />

        <Tabs
          onChange={this.onChange}
        />
        <MapWrapper
          isMarkerShown
          markers={this.state.candidates}
          checked={this.state.checked}
        />
      </div>
    );
  }
}

export default App;
