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
    const venue = this.props.venue;
    // console.log(this.props);
    this.state = {
      center: {
        lat: 37.80525789999999,
        lng: -122.27110449999998
      },
      zoom: 11
    };
    if (venue) console.log(venue.longitude);
    if (venue) console.log(venue.latitude);
  }

  componentDidMount() {}

  render() {
    // if (!this.props.venue.latitude && !this.props.venue.longitude)
    //   return console.log("hello");
    if (this.props)
      return (
        <div style={{ height: "40vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "key"
            }}
            defaultCenter={this.state.center}
            center={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <AnyReactComponent
              lat={this.props.venue && this.props.venue.latitude}
              lng={this.props.venue && this.props.venue.longitude}
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
