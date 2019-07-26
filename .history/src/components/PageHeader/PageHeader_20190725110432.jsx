/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// import {
//   Button,
//   Label,
//   FormGroup,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Container,
//   Row,
//   Col
// } from "reactstrap";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import SearchEvents from "../../views/custom/events/SearchEvents";

const PageHeader = props => {
  // console.log(props.searchEvents);
  const searchEvents = props.searchEvents;
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <Row>
            <Col>
              <h1 className="h1-seo">Queeery</h1>
              <h3 className="d-none d-sm-block">A queery for queers.</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <SearchEvents searchEvents={searchEvents} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
