import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

import "assets/css/nucleo-icons.css";

const Event = ({ event }) => {
  const { name, description, start, logo, id, url, is_free } = event;
  let date;
  let time;
  // const date = new Date(start.local).toDateString();
  // let time = new Date(start.local).toLocaleTimeString();
  if (start) {
    date = new Date(start.local).toDateString();
    time = new Date(start.local).toLocaleTimeString();
  }

  // if length is 10 convert to american time zone
  // otherwise .toLocaleTimeString() will do for now
  if (time.length === 10) {
    time = time.slice(0, 4) + " " + time.slice(-2);
  }

  let defaultImg = "https://picsum.photos/200/200/?random";
  let imgUrl = logo;
  if (imgUrl !== null) {
    imgUrl = imgUrl.url;
  } else {
    imgUrl = defaultImg;
  }

  return (
    <Col className="q-event-item">
      <Col>
        <div className="space-20" />
        <small className="d-block primary text-uppercase font-weight-bold mb-4 size-up">
          Q
        </small>{" "}
      </Col>
      <Col>
        <h3 className="text-primary q-event-details">{name.text}</h3>
        <h3 color="Danger" className="date-title">
          {date}
        </h3>
        <h4>{time}</h4>
      </Col>

      <Col>
        <img
          alt={name.text}
          className="img-fluid rounded shadow-lg"
          src={imgUrl}
        />
      </Col>
      <Col>
        <div className="typography-line">
          <p>Description:</p>
          <p className="text-muted q-event-description">{description.text}</p>
        </div>
      </Col>
      <Container>
        <Row>
          {/* <div className="w-100" />{" "} */}
          <Col>
            {/* <Button
              color="danger"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; &nbsp;Tickets&nbsp; &nbsp;
            </Button> */}

            <Button color="info" tag={Link} to={`/details/${id}`}>
              More Info
            </Button>
          </Col>
        </Row>
        <Col>
          {is_free ? (
            <i className="tim-icons icon-check-2" style={{ margin: "15px 0" }}>
              {" "}
              &nbsp; &nbsp;<span>FREE EVENT</span>{" "}
            </i>
          ) : (
            ""
          )}
        </Col>{" "}
      </Container>
      <div className="space-20" />
    </Col>
  );
};

export default Event;
