import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignJustify, FaCode } from "react-icons/fa";

export default function Nav() {
  const [state, setState] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <div className="navbar__left">
            <NavLink to="/" className="navbar__left-logo">
              <FaCode />
            </NavLink>
          </div>

          <div
            className="navbar__right"
            style={{ transform: state ? "translateX(0px)" : "" }}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
        <div className="toggle">
          <FaAlignJustify onClick={() => setState(!state)}></FaAlignJustify>
        </div>
      </div>
    </nav>
  );
}
