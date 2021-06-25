import React from "react";

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
            <li className="skills-categary">PROGRAMMING LANGUAGES</li>
            <ul><li>C </li><li>C++</li><li>JavaScript</li></ul>
            
            <li className="skills-categary">FAMILIAR WITH:</li>
            <ul><li>Java</li><li>Python</li></ul>
            
            <li className="skills-categary">TECHNOLOGIES AND FRAMEWORKS</li>
            <ul><li>ReactJs</li><li>Redux</li><li>Node.js</li><li>Express.js</li><li>Bootstrap</li><li>CSS </li><li>MongoDB</li><li>Firebaset</li><li>Photoshop</li></ul>
            
            <li className="skills-categary">TOOLS</li>
            <ul><li>Git</li><li>Github</li><li>VSCode</li><li>Linux</li><li>Heroku</li><li>Netlify</li></ul>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;

// 
// 
// 
// 
// ReactJs+Redux •Node.js  Express.js•Bootstrap •CSS MongoDB •Firebase •Photoshop
// TOOLS
// Git • Github • VSCode • Linux
// Heroku •Netlify