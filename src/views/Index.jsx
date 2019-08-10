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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";
import Footer from "components/Footer/Footer.jsx";

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

// Queeery original routing //TODO check current template routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Navbar from "../views/custom/layout/Navbar";
import Events from "../views/custom/events/Events";
// import Event from "../views/custom/events/Event";
// import Alert from "../views/custom/layout/Alert";
// import About from "../views/custom/pages/About";
import axios from "axios";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: {},
      event: [],
      loading: false,
      location: "Oakland",
      within: 10,
      keyword: "queer",
      isFree: false
    };
  }

  async componentWillMount() {
    document.body.classList.toggle("index-page");
    console.log(this.state.keyword);
    this.searchEvents(this.state.location, this.state.keyword);
  }

  searchEvents = async (location, keyword) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://www.eventbriteapi.com/v3/events/search/?q=${keyword}&location.address=${location}&sort_by=date&location.within=${50}mi&token=${
        process.env.REACT_APP_EVENTBRITE_CLIENT_ID
      }`
    );

    this.setState({ events: res.data, loading: false });
  };

  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }

  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader
            searchEvents={this.searchEvents}
            location={this.state.location}
            loading={this.state.loading}
          />
          <div className="main">
            {<Events loading={this.state.loading} events={this.state.events} />}
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
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
