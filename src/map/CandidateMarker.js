import React from "react";
import { Marker } from "react-google-maps";

class CandidateMarker extends React.Component {
  render() {
    const { id, candidate } = this.props;

    return (
      <Marker
        key={candidate.id}
        label={candidate.name}
        position={{ lat: candidate.latitude, lng: candidate.longitude }}
      />
    );
  }
}

export default CandidateMarker;
