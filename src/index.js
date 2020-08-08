import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
import "./html.css";
// pages
import Index from "views/Index.js";
/* import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js"; */
// others
import AUVPage from "views/auv/auv.js";
import Gallery from "views/gallery.js";
import Intersted from "views/intersted/intersted";
import Donation from "views/donation/donation";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route path="/auv" render={props => <AUVPage {...props} />} />
      <Route
        path="/gallery"
        render={props => <Gallery {...props} title="Gallery" />}
      />
      <Route
        path="/donation"
        render={props => <Donation {...props} title="Intersted Page" />}
      />

      <Route
        path="/learn-more"
        render={props => <Intersted {...props} title="Intersted Page" />}
      />

      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
