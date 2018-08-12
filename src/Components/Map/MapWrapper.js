import React from "react";
import Map from './Map'

export default class MapWrapper extends React.PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();

    fetch('/candidates.json')
      .then(res => res.json())
      .then(data => this.setState({ candidates: data }))
      .catch(err => console.log('err: ', console.log('error')))
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <Map
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        markers={this.state.candidates}
      />
    );
  }
}
