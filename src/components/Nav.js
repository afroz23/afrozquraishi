import React from "react";
import { FaAlignJustify,FaCode} from "react-icons/fa";

import { Anchor } from 'antd';
const { Link } = Anchor;

const Nav = () => {
  const [state, setState] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <div>
            <ul className="navbar__left">
              <a href="#home" className="navbar__left-logo">
                <FaCode/>
              </a>
            </ul>
          </div>
          
            <Anchor className="navbar__right" style={{transform:state?"translateX(0px)": ""}}>
               <Link activeClassName="is-active" className="navbar-item" href="#home" title="Home" />
               <Link activeClassName="is-active" className="navbar-item" href="#projects" title="Projects" />
               <Link activeClassName="is-active" className="navbar-item" href="#about" title="About"/>
               <Link activeClassName="is-active" className="navbar-item" href="#skills" title="Skills" />
               <Link activeClassName="is-active" className="navbar-item" href="#contact" title="Contact" />
            </Anchor>
            
        </div>
        <div className="toggle">
          <FaAlignJustify onClick={() => setState(!state)}></FaAlignJustify>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
