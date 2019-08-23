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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import App from "views/App.js";
import Index from "views/Index.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import DetailsPage from "views/examples/DetailsPage.js";
import Details from "views/examples/Details.js";
import EventState from "context/eventbrite/EventState";

ReactDOM.render(
  <EventState>
    <BrowserRouter>
      <Switch>
        <Route path="/components" render={props => <App {...props} />} />
        <Route
          path="/landing-page"
          render={props => <LandingPage {...props} />}
        />
        <Route
          path="/register-page"
          render={props => <RegisterPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        />
        <Route path="/details/:id" render={props => <Details {...props} />} />
        <Route
          path="/details-page/:id"
          render={props => <DetailsPage {...props} />}
        />
        <Redirect from="/" to="/components" />
      </Switch>
    </BrowserRouter>
  </EventState>,
  document.getElementById("root")
);
