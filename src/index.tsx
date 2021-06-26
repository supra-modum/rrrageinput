import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "cirrus-ui";
import { ScrollToTop } from "./scroll";
import { App } from "./App";

render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById("root")
);
