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
import React, { Fragment, useState, useEffect, useContext } from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";
import Footer from "components/Footer/Footer.jsx";
import PropTypes from "prop-types";

// sections for this page/view
import Basics from "views/IndexSections/Basics.jsx";
import Navbars from "views/IndexSections/Navbars.jsx";
import Tabs from "views/IndexSections/Tabs.jsx";
import Pagination from "views/IndexSections/Pagination.jsx";
import Notifications from "views/IndexSections/Notifications.jsx";
import Typography from "views/IndexSections/Typography.jsx";
import JavaScript from "views/IndexSections/JavaScript.jsx";
import NucleoIcons from "views/IndexSections/NucleoIcons.jsx";
import Signup from "views/IndexSections/Signup.jsx";
import Examples from "views/IndexSections/Examples.jsx";
import Download from "views/IndexSections/Download.jsx";

import { Container, Row, Col, Nav, NavItem, NavLink, Alert } from "reactstrap";

// Queeery original routing //TODO check current template routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Navbar from "../views/custom/layout/Navbar";
import Events from "./custom/events/Events";
import Spinner from "./custom/layout/Spinner";
// import About from "../views/custom/pages/About";
import axios from "axios";
import EventContext from "context/eventbrite/eventContext";

const App = () => {
  const eventContext = useContext(EventContext);
  console.log(eventContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://www.eventbriteapi.com/v3/events/search/?q=${keyword}&location.address=${location}&sort_by=date&location.within=${within}mi&token=${process.env.REACT_APP_EVENTBRITE_CLIENT_ID}`
      );
      // setEvents(res.data);
      // setLoading(false);
      scrollAfterSearch();
    };
    fetchData();

    //Needed for back button bug
    document.body.classList.remove("profile-page");
    document.body.classList.add("index-page");
    // Needeed for Nav layout tings
  }, []);

  //Scroll to events section after a seach has been submitted
  const scrollAfterSearch = () => {
    if (!loading) {
      document
        .getElementById("events-container")
        .scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const scrollAfterRewind = () => {
    if (!loading) {
      document
        .getElementById("root")
        .scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const clearEvents = () => {
    this.setState({ events: {}, loading: false });
  };

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        {/* <Alert alert={this.state.alert} /> */}
        <PageHeader
          // searchEvents={getEvents}
          clearEvents={clearEvents}
          // setAlert={setAlertMsg}
        />
        {alert ? (
          <Alert className="hovering-alert" color={alert.type}>
            {alert.msg}
          </Alert>
        ) : null}

        {loading ? (
          <Spinner />
        ) : (
          <div className="main">
            {!events.events ? (
              <Container>
                <Row id="events-container">
                  <Col align="center">
                    <h2>Please enter a location....</h2>
                  </Col>
                </Row>
              </Container>
            ) : (
              <Events id="events-container" />
            )}
            <Navbars />
            {/* {loading && <Spinner />} */}
            {/* <DetailsPage path=""></DetailsPage> */}
            {/* <NucleoIcons /> */}
            {/* <Typography /> */}
            {/* <Basics /> */}
            {/* <Basics />
            <Navbars />
            <Tabs />
            <Pagination />
            <Notifications />
            <Typography />
            <JavaScript />
            <NucleoIcons />
            <Signup />
            <Examples />
            <Download /> */}
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default App;
