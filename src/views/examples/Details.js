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
import React, { useEffect, useContext } from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  //   Label,
  //   FormGroup,
  //   Form,
  //   Input,
  //   FormText,
  // NavItem,
  // NavLink,
  // Nav,
  //   Table,
  // TabContent,
  // TabPane,
  Container,
  Row,
  Col
  //   UncontrolledTooltip,
  //   UncontrolledCarousel
} from "reactstrap";

import axios from "axios";
import Spinner from "../custom/layout/Spinner";
import SimpleMap from "../custom/events/SimpleMap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import EventContext from "../../context/eventbrite/eventContext";

let ps = null;
const Details = props => {
  const eventContext = useContext(EventContext);

  const {
    description,
    name,
    url,
    is_free,
    start,
    logo,
    ticket_availability
  } = eventContext.eventDetails;

  useEffect(() => {
    // Lets call the context to get Data deets
    eventContext.getEventDetails(props.match.params.id);
    eventContext.getLocationDetails(props.match.params.id);

    // Needeed for Nav layout tings
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.remove("index-page");
    document.body.classList.add("profile-page");
    return () => {
      // Needed for possible cleanup
      // componentWillUnmount
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
    };
  }, []);

  const scrollAfterLoad = () => {
    if (eventContext.loading) {
      document
        .getElementById("details-container")
        .scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  //   const date = new Date(start.local).toDateString();
  //   let time = new Date(start.local).toLocaleTimeString();
  //   // if length is 10 convert to american time zone
  //   // otherwise .toLocaleTimeString() will do for now
  //   if (time.length === 10) {
  //     time = time.slice(0, 4) + " " + time.slice(-2);
  //   }
  const { venue } = eventContext.locationDetails;
  let date;
  let time;

  if (eventContext.loading)
    return (
      <Container className="align-items-center" id="details-container">
        <Row>
          <Col className="details-spinner">
            <Spinner />
          </Col>
        </Row>
      </Container>
    );

  if (start) {
    date = new Date(start.local).toDateString();
    time = new Date(start.local).toLocaleTimeString();
  }

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          {/* <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            /> */}
          <Container className="align-items-center">
            <Row className="details-height">
              <Col lg="6" md="6">
                <h5 className="text-on-back">Q</h5>
                <h1 className="profile-title text-left">{name && name.text}</h1>
                <img
                  src={logo && logo.original.url}
                  className="img-center img-fluid"
                  alt="Responsive image"
                />
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    {/* <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/queeery-logo.png")}
                    /> */}
                    <h4 className="title">Event Details</h4>
                  </CardHeader>
                  <CardBody>
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-square-pin" />
                      </div>
                      <div className="description">
                        <h3 className="info-title">Event Location:</h3>
                        <h4 className="info-title">{venue && venue.name}</h4>
                        <p>
                          {venue && venue.address.localized_address_display}
                        </p>
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-calendar-60" />
                      </div>
                      <div className="description">
                        <h4 style={{ margin: "25px 7px" }}>{date}</h4>
                        <h4 style={{ margin: "25px 7px" }}>{time}</h4>
                        {/* <Button
                                color="danger"
                                className="float-left"
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Tickets
                              </Button> */}
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <div className="description">
                        <p style={{ margin: "25px 7px" }}>
                          Starting @ {console.log(ticket_availability)}
                          {!ticket_availability}
                          {/*                           
                          {ticket_availability
                            ? ticket_availability.minimum_ticket_price.display
                            : "$0"} */}
                        </p>
                        <Button
                          color="danger"
                          className="float-left"
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Tickets
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col>
                <p className="details-description text-left">
                  {description && description.text}
                </p>
                {/* <SimpleMap venue={venue} /> */}
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#dayana"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#dayana"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Details;
