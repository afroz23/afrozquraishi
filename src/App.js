import React from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
// import { FaArrowUp } from "react-icons/fa";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Home />
      <Projects />
      <About />
      <Skills />
      <Contact /> */}
    </div>
  );
}

export default App;
