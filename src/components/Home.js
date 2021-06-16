import React from "react";
import Typed from 'react-typed';
import {FaLinkedinIn,FaTwitter,FaInstagram} from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
const Home = () => {
  const [state] = React.useState({ image: "/images/afroz23.png"  });
  return (
    <header id="home" className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <div className='header-font-size'>Hi, I'm <span className="span-afroz">Afroz</span> Quraishi</div>
                <Typed  
                    className="typed-text"                  
                    strings={['Competitive Programmer','Full Stack Developer','Open Source Contributor','Problem Solver']}
                    typeSpeed={80}
                    backSpeed={10}
                    loop >
                </Typed>
                
                <div className="header__buttons">
                  <a href="#about" className="more_about">
                    More About me
                  </a>
                </div>
                <div className="header__ul">
                  <a className="header_anchor" target="_blank" rel="noopener noreferrer" href="https://github.com/afroz23"><AiFillGithub className="headerIcon" /></a>
                  <a className="header_anchor" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/afrozquraishi/"><FaLinkedinIn className="headerIcon" /></a>
                  <a className="header_anchor" target="_blank" rel="noopener noreferrer" href="https://twitter.com/AfrozQuraishi_"><FaTwitter className="headerIcon" /></a>
                  <a className="header_anchor" target="_blank" rel="noopener noreferrer"href="https://www.instagram.com/afrozquraishi_/"><FaInstagram className="headerIcon" /></a>
                </div>
                <div className="resume__buttons">
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
