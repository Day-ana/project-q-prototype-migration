import React, { Component } from "react";
import EventItem from "./EventItem";
import Spinner from "../layout/Spinner";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

export class Events extends Component {
  render() {
    const { events, loading } = this.props;

    // const eventstyle = {
    //   display: "grid",
    //   gridTemplateColumns: "repeat(2, 1fr)",
    //   gridGap: "1rem",
    //   // border: "1px solid rgb(255, 1, 151)",
    //   padding: "20px 30px"
    //   // boxShadow: "-1px -3px 19px #ff019740"
    // };
    // console.log("hello");

    return (
      <Container id="events-container" className="main-layout">
        {/* {console.log(events)} */}
        {events.events.map(event => (
          <EventItem event={event} key={event.id} />
        ))}
      </Container>
    );
  }
}

export default Events;
