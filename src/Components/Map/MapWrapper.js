import React from "react";
import Map from './Map'

export default class MapWrapper extends React.PureComponent {
  state = {
    isMarkerShown: false,
  };

  componentDidMount() {
    this.delayedShowMarker();
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
      <section id="mapa" className="map">
          <div className="parallax-mapa"></div>
          <Map
            className="parallax-content-mapa map"
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
            markers={this.props.markers}
          />
      </section>
    );
  }
}
