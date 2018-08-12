import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap
} from "react-google-maps";

import CandidateMarker from './CandidateMarker'

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDmIlNLJYDwsNS99W2FVGnhoYRByofzyrU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -22.0014199, lng: -42.4188065 }}
    >
      {props.markers.map(m => {
        return (
          <CandidateMarker
            key={m.id}
            candidate={m}
            onClick={props.onMarkerClick}
          />
        )
      })}
    </GoogleMap>
));

export default Map
