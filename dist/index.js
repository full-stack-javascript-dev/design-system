import React from "react"; //import { render } from "react-dom";

import { render } from "react-snapshot";
import "./index.css";
import App from "./App";
render(React.createElement(App, null), document.getElementById("root"));