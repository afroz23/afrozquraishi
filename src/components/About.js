// import React from "react";
// import { Anchor } from 'antd';
// const { Link } = Anchor;
// const About = () => {
//   const [header] = React.useState({
//     subHeader: "About Me",
//     text: "IIIT Gwalior'23 • Competitive Programmer • MERN Stack Developer",
//   });
//   return (
//     <div id="about" className="about">
//       <div className="container">
//         <div className="common">
//           <h1 className="mainHeader">{header.subHeader}</h1>
//           <p className="mainContent">{header.text}</p>
//           <div className="commonBorder"></div>
//         </div>
//         <div className="row  h-650 alignCenter">
//           <div className="col-6">
//             <div className="about__img">
//               <img src="/images/afroz23.png" alt="afroz23" />
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="about__info">
//               <h1>Hello there!</h1>
//               <div className="about__info-p1">
//               I am Afroz quraishi from IIIT Gwalior and a Web Developer (MERN stack). 
//               I am pursuing my graduation from IIIT Gwalior with a degree IPG-MTech in Information Technology. Currently i am in six semesters.
//               I am also interested in Competitive Coding.
//               </div>
//               <div className="about__info-p2">
//                 I'm most passionate to solve real life problem through Programming and my goal is to pursue this passion within the field of Software Engineering.
//                 In my free time, I like to do Competitive Coding and to learn new algorithms.
//               </div>
              

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { Anchor } from 'antd';
const { Link } = Anchor;
const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "IIIT Gwalior'23 • Competitive Programmer • MERN Stack Developer",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Afroz Quraishi" },
    { id: 2, title: "Email:", text: "afroziiitian@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 766 518 2848" },
    { id: 4, title: "Website:", text: "afrozquraishi.herokuapp.com" },
    { id: 5, title: "Fun Fact:", text: "I am an Alien" },
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
