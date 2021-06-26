import React from "react";
import { FaJava,FaPython,FaGitAlt,FaGithub,FaLinux,FaReact,FaNodeJs,FaBootstrap} from "react-icons/fa";
import { SiC,SiCplusplus,SiAdobephotoshop,SiFirebase,SiHeroku,SiNetlify,SiHtml5,SiVisualstudiocode,SiCss3,SiMongodb,SiRedux} from "react-icons/si";
import {GiSightDisabled} from "react-icons/gi";
import {DiJavascript1} from "react-icons/di";

const Skills = () => {
  const [header] = React.useState({
    subHeading: "My skills",
    text:"These all are my skills.",
  });
  return (
    <div id="skills" className="skills">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          <ul className="skills-list">
            
            <li className="category">PROGRAMMING LANGUAGES</li>
              <ul className="skills-category">
                <li className="pro-icons"><div className="si-icons"><SiC/></div><p>C</p> </li>
                <li className="pro-icons"><div className="si-icons"><SiCplusplus/></div><p>C++</p></li>
                <li className="pro-icons"><div className="si-icons"><DiJavascript1/></div><p>Javascript</p></li>
                <li className="pro-icons"><div className="si-icons"><FaJava/></div><p>Java</p></li>
                <li className="pro-icons"><div className="si-icons"><FaPython/></div><p>Python</p></li>
              </ul>
            
            <li className="category">TECHNOLOGIES AND FRAMEWORKS</li>
            <ul className="skills-category">
              <li className="pro-icons"><div className="si-icons"><SiHtml5/></div><p>Html</p></li>
              <li className="pro-icons"><div className="si-icons"><SiCss3/></div><p>CSS</p></li>
              <li className="pro-icons"><div className="si-icons"><FaReact/></div><p>ReactJs</p></li>
              <li className="pro-icons"><div className="si-icons"><SiRedux/></div><p>Redux</p></li>
              <li className="pro-icons"><div className="si-icons"><FaNodeJs/></div><p>Node.js</p></li>
              <li className="pro-icons"><div className="si-icons"><GiSightDisabled/></div><p>Express.js</p></li>
              <li className="pro-icons"><div className="si-icons"><SiMongodb/></div><p>MongoDB</p></li>
              <li className="pro-icons"><div className="si-icons"><FaBootstrap/></div><p>Bootstrap</p></li>
              <li className="pro-icons"><div className="si-icons"><SiFirebase/></div><p>Firebase</p></li>
              <li className="pro-icons"><div className="si-icons"><SiAdobephotoshop/></div><p>Photoshop</p></li>
            </ul>
            
            <li className="category">TOOLS</li>
            <ul className="skills-category">
              <li className="pro-icons"><div className="si-icons"><FaGitAlt/></div><p>Git</p></li>
              <li className="pro-icons"><div className="si-icons"><FaGithub/></div><p>Github</p></li>
              <li className="pro-icons"><div className="si-icons"><SiVisualstudiocode/></div><p>VsCode</p></li>
              <li className="pro-icons"><div className="si-icons"><FaLinux/></div><p>Linux</p></li>
              <li className="pro-icons"><div className="si-icons"><SiHeroku/></div><p>Heroku</p></li>
              <li className="pro-icons"><div className="si-icons"><SiNetlify/></div><p>Netlify</p></li>
            </ul>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;