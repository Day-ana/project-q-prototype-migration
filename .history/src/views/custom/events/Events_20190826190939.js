import React, { Component, useContext } from "react";
import EventItem from "./EventItem";
import Event from "./Event";
import Spinner from "../layout/Spinner";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import EventContext from "../../../context/eventbrite/eventContext";
const Events = () => {
  const eventContext = useContext(EventContext);
  const { loading, events } = eventContext;

  return (
    <Container id="events-container" className="main-layout">
      {events.events.map(event => (
        <Event event={event} key={event.id} />
      ))}
    </Container>
  );
};

export default Events;
