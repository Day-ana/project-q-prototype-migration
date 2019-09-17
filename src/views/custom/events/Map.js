import React, { useState, useEffect, useContext } from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import { Button, NavItem, NavLink } from "reactstrap";
import "assets/css/nucleo-icons.css";

const styled = {
  fontSize: "2rem"
};

const MapMarker = ({ text, url }) => (
  <NavItem>
    <NavLink
      style={styled}
      data-placement="bottom"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      title="location"
    >
      <i className="tim-icons icon-square-pin" />
    </NavLink>
  </NavItem>
);

const Map = props => {
  const [zoom, setZoom] = useState(14);
  const [center, setCenter] = useState([40.7535965, -73.98323260000001]);

  // console.log(props.url);

  useEffect(props => {
    console.log("useEffect");
    // setZoom(16);
    // setCenter([parseFloat(coord[0]), parseFloat(coord[1])]);
  });

  const handleApiLoaded = (map, coord) => {
    // use map and maps objects
    // MUST parseFloat in order to turn back into num!
    // WIP: Todo Fix error
    console.log("handleApiLoaded");
    // const bounds = map.LatLngBounds();
    console.log(map);
    console.log(map.zoom);

    setCenter([parseFloat(coord[0]), parseFloat(coord[1])]);
    // setZoom(16);
  };

  // Re-center map when resizing the window
  // const bindResizeListener = (map, maps, bounds) => {
  //   maps.event.addDomListenerOnce(map, "idle", () => {
  //     maps.event.addDomListener(window, "resize", () => {
  //       map.fitBounds(bounds);
  //     });
  //   });
  // };

  if (props.venue) {
    return (
      <div style={{ height: "30vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "key"
          }}
          center={center}
          zoom={zoom}
          //Update the map coordinates after it loads
          yesIWantToUseGoogleMapApiInternals
          // onClick={handleApiLoaded}

          onGoogleApiLoaded={({ map }) =>
            handleApiLoaded(map, [props.venue.latitude, props.venue.longitude])
          }
        >
          <MapMarker
            lat={props.venue.latitude}
            lng={props.venue.longitude}
            text="X"
            url={props.url}
          />
        </GoogleMapReact>
      </div>
    );
  }
};

export default Map;
