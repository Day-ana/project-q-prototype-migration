import React, { useContext } from "react";
import Event from "./Event";
import { Container } from "reactstrap";
import EventContext from "../../../context/eventbrite/eventContext";
import { isObject } from "util";
const Events = () => {
  const eventContext = useContext(EventContext);
  const { events } = eventContext;

  console.log(eventContext);
  console.log(eventContext.events.events.length);
  console.log(eventContext.events.events.length);
  return (
    <Container id="events-container" className="main-layout">
      {events.events.map((event, i) => (
        <Event event={event} key={event.id} />
      ))}
    </Container>
  );
};

export default Events;
