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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";
import Footer from "components/Footer/Footer.jsx";

// sections for this page/view
import Basics from "views/IndexSections/Basics.jsx";
import Navbars from "views/IndexSections/Navbars.jsx";
// import Tabs from "views/IndexSections/Tabs.jsx";
// import Pagination from "views/IndexSections/Pagination.jsx";
// import Notifications from "views/IndexSections/Notifications.jsx";
// import Typography from "views/IndexSections/Typography.jsx";
// import JavaScript from "views/IndexSections/JavaScript.jsx";
// import NucleoIcons from "views/IndexSections/NucleoIcons.jsx";
// import Signup from "views/IndexSections/Signup.jsx";
// import Examples from "views/IndexSections/Examples.jsx";
// import Download from "views/IndexSections/Download.jsx";

import { Container, Row, Col, Alert } from "reactstrap";

// import Navbar from "../views/custom/layout/Navbar";
import Events from "./custom/events/Events";
import Spinner from "./custom/layout/Spinner";
// import About from "../views/custom/pages/About";
import EventContext from "context/eventbrite/eventContext";
import AlertContext from "context/alert/alertContext";

const App = () => {
  const eventContext = useContext(EventContext);
  const { events, loading } = eventContext;
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  // console.log(alertContext);
  // console.log(alert);

  useEffect(() => {
    //Needed for back button bug
    document.body.classList.remove("profile-page");
    document.body.classList.add("index-page");
    // Needeed for Nav layout tings

    scrollAfterRewind();
  }, []);

  const scrollAfterRewind = () => {
    if (!loading) {
      document
        .getElementById("root")
        .scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        {alert && (
          <Alert alert={alert} className="hovering-alert" color={alert.type}>
            {alert.msg}
          </Alert>
        )}
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
