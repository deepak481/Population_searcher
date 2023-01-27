// import "./wdyr";
import React, { StrictMode } from "react";
import { render } from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
// import "core-js/stable";
import "regenerator-runtime/runtime";

import App from "./App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
