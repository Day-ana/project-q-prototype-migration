import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import EventContext from "../../../context/eventbrite/eventContext";
import { Button, Input, Row, Col } from "reactstrap";

// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
import Events from "./Events";

const SearchEvents = props => {
  const eventContext = useContext(EventContext);
  const { location, keyword, within } = eventContext;

  const onSubmit = e => {
    e.preventDefault();
    if (location === "") {
      eventContext.setAlert("Please enter a Location", "danger");
    } else {
      eventContext.searchEvents(location, keyword, within);
    }
  };

  const onSelectRange = e => {
    e.preventDefault();
    // console.log(e.target.value);
    eventContext.setWithin(e.target.value);
  };

  const onSelectKeyword = e => {
    e.preventDefault();
    // console.log(e.target.value);
    eventContext.setKeyword(e.target.value);
  };

  const updateLocation = location => {
    eventContext.setLocation(location);
  };

  // const onChange = e => eventContext.setLocation(e.target.value);
  const onChange = e => {
    e.preventDefault();
    // console.log(e.target.value);
    updateLocation(e.target.value);
  };

  if (eventContext.events) {
    console.log(eventContext.events.events[0]);
  }
  // const clearEvents = e => {
  //   e.preventDefault();
  //   // props.clearEvents();
  // };
  return (
    <div className="search">
      <form onSubmit={onSubmit}>
        <Row>
          <Col sm="8">
            <Input
              type="text"
              name="text"
              placeholder="Enter a location..."
              value={location}
              onChange={onChange}
            />
            {/* <Input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          /> */}
          </Col>
          <Col sm="4">
            <Button color="primary" value="search" type="submit">
              Queeery
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="col-sm">
            <p className="category">Within miles:</p>
            <select onChange={onSelectRange} value={within}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </Col>
          <Col className="col-sm">
            <p className="category">Keyword:</p>
            <select onChange={onSelectKeyword} value={keyword}>
              <option value="queer">Queer</option>
              <option value="lesbian">Lesbian</option>
              <option value="lgbt">LGBT</option>
              <option value="gay">gay</option>
            </select>
            <button
              className="btn btn-light btn-block"
              onClick={eventContext.clearEvents}
            >
              Clear
            </button>
          </Col>
          <Col className="col-sm">
            <p className="category">Is Free?</p>
            <Switch
              defaultValue={false}
              offColor=""
              offText=""
              onColor=""
              onText=""
            />
            <br />
            {/* {showClear && ( */}
            {/* <button className="btn btn-light btn-block" onClick={clearEvents}>
              Clear
            </button> */}
            {/* )} */}
          </Col>
        </Row>
      </form>
    </div>
  );
};
SearchEvents.propTypes = {
  // clearEvents: PropTypes.func.isRequired,
  // showClear: PropTypes.bool.isRequired,
  // searchEvents: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default SearchEvents;
