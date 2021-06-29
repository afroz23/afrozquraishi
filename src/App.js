import React from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import { BackTop } from "antd";
import {FaArrowUp} from 'react-icons/fa';
import Contact from "./components/Contact";
function App() {
  return (
    <div>
        <Nav/>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        
        <span>
          <BackTop>
            <div className="commonIcons"><FaArrowUp/></div>
          </BackTop>
        </span>
        <hr/>
        <Contact/>
    </div>
  );
}

export default App;