import React from "react";
import ReactDOM from "react-dom";

import store from "./Store/Creditcard";

import "./index.css";
import App from "./Components/App/App";

const Shell = () => <App store={store} />;

ReactDOM.render(<Shell />, document.getElementById("root"));
