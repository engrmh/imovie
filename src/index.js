import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "aos/dist/aos.css";
import "react-tippy/dist/tippy.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
