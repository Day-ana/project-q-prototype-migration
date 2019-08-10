import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from "reactstrap";
import "assets/css/nucleo-icons.css";

class EventItem extends Component {
  render() {
    const {
      name,
      description,
      start,
      logo,
      id,
      url,
      is_free
    } = this.props.event;

    const date = new Date(start.local).toDateString();
    let time = new Date(start.local).toLocaleTimeString();
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
          <small className="d-block primary text-uppercase font-weight-bold mb-4">
            Q
          </small>{" "}
        </Col>
        <Col>
          <h3
            className="text-primary"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "wrap",
              width: "320px",
              height: "120px"
            }}
          >
            {name.text}
          </h3>
          <h3 color="Danger">{date.toString()}</h3>
          {/* <h4>{start.local}</h4> */}
          <h4>{time}</h4>
          <h5>{id}</h5>
        </Col>

        <Col>
          <img alt="..." className="img-fluid rounded shadow-lg" src={imgUrl} />
          <div className="typography-line">
            <p>{/* <span>Description:</span> {description.text} */}</p>
          </div>
        </Col>
        <Col>
          <div className="typography-line" style={{ paddingLeft: "0" }}>
            <p>Description:</p>
            <p
              className="text-muted"
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                maxWidth: "400px"
              }}
            >
              {description.text}
            </p>
          </div>
          <div className="typography-line" />
        </Col>
        <Container>
          <Row>
            <div className="w-100" />{" "}
            <Col>
              {is_free ? (
                <i
                  className="tim-icons icon-check-2"
                  style={{ margin: "15px 0" }}
                >
                  {" "}
                  &nbsp; &nbsp;FREE{" "}
                </i>
              ) : (
                ""
              )}
            </Col>{" "}
            <Col>
              <Button
                color="danger"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tickets
              </Button>
            </Col>
          </Row>
        </Container>
        <div className="space-20" />
      </Col>
    );
  }
}

export default EventItem;
