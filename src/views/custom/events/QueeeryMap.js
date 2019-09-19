import React, { Fragment, useState, useEffect } from "react";
import Marker from "./Marker";
import GoogleMap from "./GoogleMap";
import "assets/css/nucleo-icons.css";

const Map = props => {
  const [zoom] = useState(11);
  // Default center NY
  const [center, setCenter] = useState([40.7535965, -73.98323260000001]);

  useEffect(props => {
    // console.log("useEffect");
  });

  const handleApiLoaded = (map, maps, place) => {
    // console.log("handleApiLoaded");
    // use map and maps objects
    setCenter([place[0], place[1]]);
  };

  if (props.venue) {
    return (
      <div style={{ height: "40vh", width: "100%" }}>
        <Fragment>
          {props.venue && (
            <GoogleMap
              defaultZoom={zoom}
              center={center}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) =>
                handleApiLoaded(map, maps, [
                  parseFloat(props.venue.latitude),
                  parseFloat(props.venue.longitude)
                ])
              }
            >
              <Marker
                onClick={() => window.open(props.url, "_blank")}
                lat={props.venue.latitude}
                lng={props.venue.longitude}
              />
            </GoogleMap>
          )}
        </Fragment>
      </div>
    );
  }
};

export default Map;
