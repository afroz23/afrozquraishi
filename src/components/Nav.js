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
          
            <Anchor className="navbar__right" style={{transform:state?"translateX(0px)": "translateX(-500px)"}}>
               <Link className="navbar-item" href="#home" title="Home" />
               <Link className="navbar-item" href="#projects" title="Projects" />
               <Link className="navbar-item" href="#about" title="About"/>
               <Link className="navbar-item" href="#skills" title="Skills" />
               <Link className="navbar-item" href="#contact" title="Contact" />
               <Link className="navbar-item" href="https://drive.google.com/file/d/1z-wjgOCZORI6fIPOa7aBESVSohO_UC0M/view?usp=sharing" title="Resume" />              
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