import React from "react";
import { Marker } from "react-google-maps";

class CandidateMarker extends React.Component {
  render() {
    const { id, latitude, longitude, name } = this.props;

    return (
      <Marker
        key={id}
        label={name}
        position={{ lat: latitude, lng: longitude }}
      />
    );
  }
}

export default CandidateMarker;
