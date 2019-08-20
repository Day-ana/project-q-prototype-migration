import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const styled = {
  border: "1px solid red",
  width: "20px",
  height: "20px",
  borderRadius: "10px"
};

const AnyReactComponent = ({ text }) => <div style={styled}>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 37.80525789999999,
        lng: -122.27110449999998
      },
      zoom: 11
    };
  }

  render() {
    const { longitude, latitude } = this.props.mapInfo;
    const center = { lat: latitude, lng: longitude };
    // Important! Always set the container height explicitly
    console.log(center);
    return (
      <div style={{ height: "40vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: ""
          }}
          defaultCenter={this.state.center}
          // center={center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={latitude}
            lng={longitude}
            text="Event Location"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
// SimpleMap.defaultProps = {
//   center: {
//     lat: 37.80525789999999,
//     lng: -122.27110449999998
//   },
//   zoom: 15
// };

export default SimpleMap;
