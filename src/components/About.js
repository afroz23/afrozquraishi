import React from "react";
const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "IIIT Gwalior'23 • Competitive Programmer • MERN Stack Developer",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Afroz Quraishi" },
    { id: 2, title: "Email:", text: "afroziiitian@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 766 518 2848" },
    { id: 4, title: "Linkedin", text: "afrozquraishi" },
  ]);
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
              <img src="/images/afroz23.png" alt="afroz23" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi there</h1>
              <div className="about__info-p1">
              I am Afroz quraishi from IIIT Gwalior and a Web Developer (MERN stack). 
              I am pursuing my graduation from IIIT Gwalior with a degree IPG-MTech in Information Technology. Currently i am in six semesters.
              I am also interested in Competitive Coding.
              </div>
              <div className="about__info-p2">
                {/* I'm most passionate to solve real life problem through Programming and my goal is to pursue this passion within the field of Software Engineering.
                In my free time, I like to do Competitive Coding and to learn new algorithms. */}
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
