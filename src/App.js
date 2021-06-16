import React from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";
//import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
      <div>
        <Nav/>
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
  );
}

export default App;