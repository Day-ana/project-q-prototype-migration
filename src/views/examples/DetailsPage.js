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
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

import axios from "axios";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States"
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
  }
];

let ps = null;

class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1,
      event: [],
      locationInfo: [],
      loading: false
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }

  async componentWillMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://www.eventbriteapi.com/v3/events/${
        this.props.match.params.id
      }/?expand=ticket_availability&token=${
        process.env.REACT_APP_EVENTBRITE_CLIENT_ID
      }`
    );

    const mapInfo = await axios.get(
      `https://www.eventbriteapi.com/v3/events/${
        this.props.match.params.id
      }/?expand=venue&token=${process.env.REACT_APP_EVENTBRITE_CLIENT_ID}`
    );

    this.setState({
      event: res.data,
      locationInfo: mapInfo.data,
      loading: false
    });
    console.log(this.state.event);
    // console.log(this.state.event.description.text);
    // console.log(this.state.locationInfo.venue);

    // console.log(this.props.match.params.id);
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    const {
      description,
      name,
      url,
      time,
      is_free,
      logo,
      ticket_availability
    } = this.state.event;
    const { venue } = this.state.locationInfo;

    // if (name) {
    //   console.log(name.text);
    // }

    // if (ticket_availability) {
    //   console.log(ticket_availability.has_available_tickets);
    // }

    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h5 className="text-on-back">Q</h5>
                  <h1 className="profile-title text-left">
                    {name && name.text}
                  </h1>
                  <img
                    src={logo && logo.original.url}
                    className="img-center img-fluid"
                    alt="Responsive image"
                  />
                </Col>
                <Col className="ml-auto mr-auto margin-120" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      {/* <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/mike.jpg")}
                      /> */}
                      <h4 className="title">Event Details</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            Location
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 2
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 2)}
                            href="#pablo"
                          >
                            Venue
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          <div className="info info-horizontal">
                            <div className="icon icon-primary">
                              <i className="tim-icons icon-square-pin" />
                            </div>
                            <div className="description">
                              <h4 className="info-title">Event Location:</h4>
                              <h6>{venue && venue.name}</h6>
                              <p>
                                {venue &&
                                  venue.address.localized_address_display}
                              </p>
                            </div>
                          </div>
                          <div className="info info-horizontal">
                            <div className="icon icon-primary">
                              <i className="tim-icons icon-mobile" />
                            </div>
                            <div className="description">
                              <p style={{ margin: "25px 7px" }}>
                                Starting @ $10{" "}
                                {/* {(ticket_availability &&
                                  ticket_availability.minimum_ticket_price
                                    .display) ||
                                  "N/A"} */}
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
                        </TabPane>
                        <TabPane tabId="tab2">
                          <Row>
                            <Label sm="3">Pay to</Label>
                            <Col sm="9">
                              <FormGroup>
                                <Input
                                  placeholder="e.g. 1Nasd92348hU984353hfid"
                                  type="text"
                                />
                                <FormText color="default" tag="span">
                                  Please enter a valid address.
                                </FormText>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Label sm="3">Amount</Label>
                            <Col sm="9">
                              <FormGroup>
                                <Input placeholder="1.587" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
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
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-book-bookmark" /> Bookmark
                    </Button>
                    <Button
                      className="btn-simple"
                      color="info"
                      href="#pablo"
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
  }
}

export default DetailsPage;
