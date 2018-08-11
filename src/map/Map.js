import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDmIlNLJYDwsNS99W2FVGnhoYRByofzyrU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -22.9138851, lng: -43.7261746 }}
  >
    {props.markers.map(m => {
      return (
        <Marker
          key={m.id}
          position={{ lat: m.latitude, lng: m.longitude }}
          onClick={props.onMarkerClick}
        />
      )
    })}
  </GoogleMap>
));

export default MyMapComponent
