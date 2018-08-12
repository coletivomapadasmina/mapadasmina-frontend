import React from "react";
import { Marker } from "react-google-maps";
import { getIcon } from '../../utils'

class CandidateMarker extends React.Component {
  render() {
    const { candidate } = this.props;

    return (
      <Marker
        key={candidate.id}
        position={{ lat: candidate.latitude, lng: candidate.longitude }}
        icon={getIcon(candidate.role.id)}
      />
    );
  }
}

export default CandidateMarker;
