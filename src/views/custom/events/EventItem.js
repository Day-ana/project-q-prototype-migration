import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from "reactstrap";
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

    // console.log(this.props.event);

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
          {" "}
          <small className="d-block primary text-uppercase font-weight-bold mb-4">
            Q
          </small>{" "}
        </Col>
        <Col>
          {" "}
          <h2 className="text-primary" style={{ height: "110px" }}>
            {name.text}
          </h2>{" "}
          <h4>{date.toString()}</h4>
        </Col>

        <Col>
          {" "}
          <img
            alt="..."
            className="img-fluid rounded shadow-lg"
            src={imgUrl}
            style={{ width: "320px" }}
          />
          <div className="typography-line">
            <p>{/* <span>Description:</span> {description.text} */}</p>
          </div>
        </Col>

        <Nav>
          <NavItem>
            <NavLink href={url} target="_blank" rel="noopener noreferrer">
              Tickets
            </NavLink>
          </NavItem>
          <NavItem>{is_free ? "FREE" : ""}</NavItem>
        </Nav>
      </Col>
    );
  }
}

export default EventItem;
