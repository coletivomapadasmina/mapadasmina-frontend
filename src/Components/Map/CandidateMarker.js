import React from "react";
import { Marker } from "react-google-maps";
import { getIcon } from '../../utils'

class CandidateMarker extends React.PureComponent {
  render() {
    const { candidate, handleClick } = this.props;

    return (
      <Marker
        key={candidate.id}
        title={candidate.electionName}
        position={{ lat: candidate.latitude, lng: candidate.longitude }}
        icon={getIcon(candidate.role.id)}
        onClick={() => handleClick(candidate)}
      />
    );
  }
}

export default CandidateMarker;
