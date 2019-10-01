import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, NavItem, NavLink } from "reactstrap";

import "assets/css/nucleo-icons.css";

const Promotion = ({ event }) => {
  return (
    <Col className="q-event-item promotion">
      <Col>
        <div className="space-20" />
        <small className="d-block primary text-uppercase font-weight-bold mb-4 size-up">
          PARTNERED POST
        </small>{" "}
      </Col>
      <Col>
        <h3 className="text-primary q-event-details">Dapper Social Club</h3>
        <h3 color="Danger" className="date-title">
          Join Today•
          <h4>EST • 2019</h4>
        </h3>
      </Col>
      <Col>
        <NavLink href="https://dappersocialclub.com/" target="_blank">
          <img
            alt="Dapper Social Club Promotion"
            className="img-fluid"
            src={require("assets/promotions/dapper_promo_326x280.png")}
          />
        </NavLink>
      </Col>
      <div className="space-20" />
    </Col>
  );
};

export default Promotion;
