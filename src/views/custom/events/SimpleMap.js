import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: props.mapInfo.latitude,
        lng: props.mapInfo.longitude
      },
      zoom: 17
    };
  }

  render() {
    const { longitude, latitude } = this.props.mapInfo;
    const center = { lat: latitude, lng: longitude };
    console.log(this.state.center);
    console.log(this.state.zoom);
    // Important! Always set the container height explicitly
    return (
      <div style={{ height: "40vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "key=key"
          }}
          defaultCenter={center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent lat={latitude} lng={longitude} text="My Marker" />
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
