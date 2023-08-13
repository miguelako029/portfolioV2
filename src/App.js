import React, { useState, useEffect } from "react";

import Hero from "./pages/hero";
import About from "./pages/about";
import Experience from "./pages/experience";
import Portfolio from "./pages/portfolio";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="main-bg">
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
    </div>
  );
}

export default App;
