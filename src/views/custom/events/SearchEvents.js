import React, { useContext } from "react";
import EventContext from "../../../context/eventbrite/eventContext";
import AlertContext from "../../../context/alert/alertContext";
import { Button, Input, Row, Col } from "reactstrap";

// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

const SearchEvents = () => {
  const eventContext = useContext(EventContext);
  const alertContext = useContext(AlertContext);
  const { location, keyword, within, isFree } = eventContext;

  const onSubmit = e => {
    e.preventDefault();

    if (location === "") {
      alertContext.setAlert("Please enter a Location", "danger");
    } else {
      eventContext.searchEvents(location, keyword, within, isFree);
      if (!eventContext.loading) {
        scrollAfterSearch();
      }
    }
  };

  const onSelectRange = e => {
    e.preventDefault();
    eventContext.setWithin(e.target.value);
  };

  const onSelectKeyword = e => {
    e.preventDefault();
    eventContext.setKeyword(e.target.value);
  };

  const updateLocation = location => {
    eventContext.setLocation(location);
  };
  const onChange = e => {
    e.preventDefault();
    updateLocation(e.target.value);
  };

  const clearEvents = () => {
    eventContext.clearEvents();
  };
  const clearSearch = e => {
    //Clear Search value if user clicks on search Input
    e.preventDefault();
    e.target.value = "";
  };

  const onChangeFree = e => {
    // e.preventDefault();
    console.log(e.props.defaultValue);
    eventContext.setFree("free");
  };

  //Scroll to events section after a seach has been submitted
  const scrollAfterSearch = () => {
    document.getElementById("events-container").scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  };

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
              onClick={clearSearch}
            />
            {/* <Input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          /> */}
          </Col>
          <Col sm="4">
            <Button
              color="primary"
              value="search"
              type="submit"
              className="queeery-btn"
            >
              Queeery
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="col-sm">
            <p className="category">Radius:</p>
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
              <option value="lgbt">LGBT</option>
              <option value="lesbian">Lesbian</option>
              <option value="gay">Gay</option>
              <option value="bisexual">Bisexual</option>
              <option value="trans">Trans</option>
            </select>
            {/* <button className="btn btn-light btn-block" onClick={clearEvents}>
              Clear
            </button> */}
          </Col>
          <Col>-</Col>
          {/* <Col className="col-sm">
            <p className="category">Is Free?</p>
            <Switch
              defaultValue={isFree}
              onChange={onChangeFree}
              checked={true}
              offColor="success"
              offText={<i className="nc-icon nc-simple-remove" />}
              onColor="success"
              onText={<i className="nc-icon nc-check-2" />}
            />
              <button className="btn btn-light btn-block" onClick={clearEvents}>
              Clear
            </button> }
          </Col> */}
        </Row>
      </form>
    </div>
  );
};

export default SearchEvents;
