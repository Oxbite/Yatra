import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Plan from "./Component/Website";
import FAQ from "./Component/FAQ";
import Contact from "./Component/Contact";

function App() {
  return (
    <div>
      <Navbar title="YATRA" />
      <Home />
      <About />
      <Plan />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
