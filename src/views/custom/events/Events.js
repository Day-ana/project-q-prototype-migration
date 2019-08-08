import React, { Component } from "react";
import EventItem from "./EventItem";
import Spinner from "../layout/Spinner";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

export class Events extends Component {
  render() {
    const { events, loading } = this.props;

    const returnedEvents = events;

    console.log(returnedEvents);

    const eventstyle = {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: "1rem",
      // border: "1px solid rgb(255, 1, 151)",
      padding: "20px 30px"
      // transition: "background 200ms",
      // boxShadow: "-1px -3px 19px #ff019740",
      // borderRadius: "5px"
    };

    if (loading) {
      return <Spinner />;
    } else if (returnedEvents !== 0) {
      return (
        <Container style={eventstyle}>
          {returnedEvents.events.map(event => (
            <EventItem event={event} key={event.id} />
          ))}
        </Container>
      );
    } else {
      return (
        <Container>
          <h2>Please enter a location....</h2>
        </Container>
      );
    }
  }
}

export default Events;
