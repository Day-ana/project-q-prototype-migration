import React, { useContext } from "react";
import Event from "./Event";
import { Container } from "reactstrap";
import EventContext from "../../../context/eventbrite/eventContext";
const Events = () => {
  const eventContext = useContext(EventContext);
  const { events } = eventContext;

  return (
    <Container id="events-container" className="main-layout">
      {events.events.map(event => (
        <Event event={event} key={event.id} />
      ))}
    </Container>
  );
};

export default Events;
