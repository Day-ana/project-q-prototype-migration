import React, { useContext } from "react";
import Event from "./Event";
import Promotion from "./Promotion";
import { Container, Col, Row } from "reactstrap";
import EventContext from "../../../context/eventbrite/eventContext";
import { isObject } from "util";
const Events = () => {
  const eventContext = useContext(EventContext);
  const { events } = eventContext;

  return (
    <Container id="events-container" className="main-layout">
      {events.events.map((event, i) => {
        //Logic for Promoted/Partnered POST
        if (i === 2 || i === 9) {
          return <Promotion />;
        }
        return <Event event={event} key={event.id} />;
      })}
    </Container>
  );
};

export default Events;
