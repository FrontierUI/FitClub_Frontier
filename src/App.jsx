import React from "react";

import "./App.css";

import {
  Footer,
  Hero,
  Join,
  Plans,
  Programs,
  Reasons,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
