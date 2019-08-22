import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

const SearchEvents = props => {
  //Set Default location/text for testing

  //Single Source of truth FTW
  const [location, setLocation] = useState(props.location);
  const [within, setWithin] = useState(props.within);
  const [keyword, setKeyword] = useState(props.keyword);
  // const [loading, setLoading] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    if (location === "") {
      props.setAlert("Please enter a Location", "danger");
    } else {
      console.log(location, keyword, within);
      props.searchEvents(location, keyword, within);
    }
  };

  const onSelectRange = e => {
    e.preventDefault();
    console.log(e.target.value);
    setWithin(e.target.value);
  };

  const onSelectKeyword = e => {
    e.preventDefault();
    console.log(e.target.value);
    setKeyword(e.target.value);
  };

  const clearEvents = e => {
    e.preventDefault();
    props.clearEvents();
  };

  const onChange = e => setLocation(e.target.value);

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
            {/* <button className="btn btn-light btn-block" onClick={clearEvents}>
              Clear
            </button> */}
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
