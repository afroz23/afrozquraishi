import React from "react";
import { FaAlignJustify,FaCode} from "react-icons/fa";

import { Anchor } from 'antd';
const { Link } = Anchor;

const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <a href="#home" className="navbar__left-logo">
               <FaCode/>
            </a>
          </ul>
          {state ? (
            <div className="navbar__right">
            <Anchor className="items">
               <Link className="navbar-item" href="#home" title="Home" />
               <Link className="navbar-item" href="#projects" title="Projects" />
               <Link className="navbar-item" href="#about" title="About"/>
               <Link className="navbar-item" href="#skills" title="Skills" />
               <Link className="navbar-item" href="#contact" title="Contact" />               
            </Anchor>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
