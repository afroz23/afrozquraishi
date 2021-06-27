import React from "react";
import { Anchor } from 'antd';
const { Link } = Anchor;
const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "IIIT Gwalior'23 • Competitive Programmer • MERN Stack Developer",
  });
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <div className="info__contacts">
                  <div className="row">
                      <div className="col-6">
                        <div>
                          <strong>Name:</strong>
                          <span>Afroz Quraishi</span>
                        </div>
                        <div>
                          <strong>Email:</strong>
                          <span>afroziiitian@gmail.com</span>
                        </div>
                        <div>
                          <strong>Phone:</strong>
                          <span>+91-7665182848</span>
                        </div>
                        <div>
                          <strong>Website:</strong>
                          <span>afrozquraishi.herokuapp.com</span>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hello There!</h1>
              <div className="about__info-p1">
              I am Afroz quraishi from IIIT Gwalior and a Web Developer (MERN stack). 
              I am pursuing my graduation from IIIT Gwalior with a degree IPG-MTech in Information Technology. Currently i am in six semesters.
              I am also interested in Competitive Coding.
              </div>
              <div className="about__info-p2">
                I'm most passionate to solve real life problem through Programming and my goal is to pursue this passion within the field of Software Engineering.
                In my free time, I like to do Competitive Coding and to learn new algorithms.
              </div>
              
              <Anchor className="resume-container">
               <Link className="resume" target="_blank" href="https://drive.google.com/file/d/1z-wjgOCZORI6fIPOa7aBESVSohO_UC0M/view?usp=sharing" title="DOWNLOAD RESUME" />              
              </Anchor>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
