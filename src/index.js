import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import About from "./profileSections/about";
// import "./App.scss";
import { ParallaxProvider } from "react-scroll-parallax";

const el = document.getElementById("app");

ReactDOM.render(
    <ParallaxProvider>
      <About />
    </ParallaxProvider>,
  el
);
