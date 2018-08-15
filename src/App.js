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
    selectedCandidate: null,
  }

  componentDidMount() {
    fetch('/candidates.json')
      .then(res => res.json())
      .then(data => this.setState({ candidates: data }))
      .catch(err => console.log('err: ', console.log('error: ', err)))
  }

  onChange = (e) => {
    const { candidates } = this.state

    //const isChecked = e.target.checked
    const checkedId = parseInt(e.target.id, 10)

    // const selectedCauses = isChecked ? checked.push(checkedId) : checked.splice(checked.indexOf(checkedId), 1)
    const hasSelected = (cause) => cause.id === checkedId
    const filteredCandidates = candidates.filter(c => c.causes.find(hasSelected))

    this.setState({
      candidates: filteredCandidates
    })
  }

  handleMarkerClick = (candidate) => {
    this.setState({
      selectedCandidate: candidate
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />

        <Tabs
          onChange={this.onChange}
          profile={this.state.selectedCandidate}
        />
        <MapWrapper
          isMarkerShown
          markers={this.state.candidates}
          checked={this.state.checked}
          handleMarkerClick={this.handleMarkerClick}
        />
      </div>
    );
  }
}

export default App;
