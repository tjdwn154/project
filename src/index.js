import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faPaperPlane,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ScrollUp from "./components/ScrollUp";

library.add(
  fas,
  faInstagram,
  faTwitter,
  faYoutube,
  faCircleCheck,
  faPaperPlane
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollUp />
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
