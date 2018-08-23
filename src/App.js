import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import Tabs from './Components/Tabs/Tabs.js';
import './App.css';
import MapWrapper from './Components/Map/MapWrapper';
import Motivation from './Components/Motivation';
import About from './Components/About';

class App extends Component {
  state = {
    candidates: [],
    visibleCandidates: [],
    selectedCandidate: null,
    checkedCauses: [],
    checkedParties: [],
  }

  componentDidMount() {
    fetch('http://mapadasmina-api.herokuapp.com/candidates.json')
      .then(res => res.json())
      .then(data => {
        const candidates = this.getCausesIndexes(data)
        this.setState({ candidates, visibleCandidates: candidates })
      })
      .catch(err => console.log('err: ', console.log('error: ', err)))
  }

  // It creates an array of causes indexes to facilitate filtering
  getCausesIndexes(candidates) {
    return candidates.map(candidate => {
      candidate.causesIndexes = []
      candidate.causes.map(cause => candidate.causesIndexes.push(cause.id))
      return candidate
    })
  }

  onChange = (e) => {
    const isChecked = e.target.checked
    const checkedId = parseInt(e.target.id, 10)

    isChecked
      ? this.addRestriction(checkedId)
      : this.removeRestriction(checkedId)
  }

  addRestriction = (checkedId) => {
    const { visibleCandidates, checkedCauses } = this.state

    const hasCheckedCause = (cause) => cause.id === checkedId
    const filteredCandidates = visibleCandidates.filter(
      candidate => candidate.causes.find(hasCheckedCause)
    )

    checkedCauses.push(checkedId)

    this.setState({
      visibleCandidates: filteredCandidates,
      checkedCauses
    })
  }

  removeRestriction = (checkedId) => {
    const { candidates, checkedCauses } = this.state

    checkedCauses.splice(checkedCauses.indexOf(checkedId), 1)

    const filteredCandidates = candidates.filter(
      candidate => checkedCauses.every(
        cause => candidate.causesIndexes.indexOf(cause) !== -1
      )
    )

    const visibleCandidates = checkedCauses.length ? filteredCandidates : candidates

    this.setState({
      visibleCandidates,
      checkedCauses
    })
  }

  onChangeParties = (e) => {
    const { candidates, checkedParties } = this.state

    const isChecked = e.target.checked
    const checkedId = parseInt(e.target.id, 10)

    isChecked
      ? checkedParties.push(checkedId)
      : checkedParties.splice(checkedParties.indexOf(checkedId), 1)

    const filteredCandidates = candidates.filter(
      candidate => checkedParties.indexOf(candidate.party.id) !== -1
    )

    const visibleCandidates = checkedParties.length ? filteredCandidates : candidates

    this.setState({
      visibleCandidates,
      checkedParties
    })
  }

  handleClose = () => {
    this.setState({
      selectedCandidate: null
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
          onChangeParties={this.onChangeParties}
          profile={this.state.selectedCandidate}
          handleClose={this.handleClose}
        />
        <MapWrapper
          isMarkerShown
          markers={this.state.visibleCandidates}
          checked={this.state.checked}
          handleMarkerClick={this.handleMarkerClick}
        />

        <Motivation />

        <About />
      </div>
    );
  }
}

export default App;
