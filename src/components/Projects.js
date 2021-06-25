import React from "react";
import { FaGithub} from "react-icons/fa";
import { GrDeploy} from "react-icons/gr";
const Projects = () => {
  const [header] = React.useState({
    subHeading: "My Projects",
    text: "These all are my recent project.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <a target="_blank" rel="noopener noreferrer" alt="Github link" href="https://github.com/afroz23/linked-list" ><FaGithub className="commonIcons" /></a>,
      heading: "Linked List",
      text: "In this project I am trying to code all the functionality of linked list in one programme in using c++.",
    },
    {
      id: 2,
      icon: <a target="_blank" rel="noopener noreferrer" alt="Github link" href="https://github.com/afroz23/Todo-App" ><FaGithub className="commonIcons" /></a>,
      icon2: <a target="_blank" rel="noopener noreferrer" alt="Deploy link" href="https://afroz23.github.io/Todo-App/" ><GrDeploy className="commonIcon" /></a>,
      heading: "Todo App",
      text:"A simple Todo app using ReactJS.You can Add, Edit, Delete element in the list.",
    },
    {
      id: 3,
      icon: <a target="_blank" rel="noopener noreferrer" alt="Github link" href="https://github.com/afroz23/chat-room-app" ><FaGithub className="commonIcons" /></a>,
      icon2: <a target="_blank" rel="noopener noreferrer" alt="Deploy link" href="https://chat-room-application.netlify.app/" ><GrDeploy className="commonIcon" /></a>,
      heading: "Chat Room App",
      text: "In this Application Admin provides you the username and password.It is to allows users to chat with each other.",
    },
    {
      id: 4,
      icon: <a target="_blank" rel="noopener noreferrer" alt="Github link" href="https://github.com/afroz23/Guess-The-Number" ><FaGithub className="commonIcons" /></a>,
      heading: "Guess The Number",
      text: "It is a python based programme where the computer randomly generates a number between 0 and 20. The user needs to guess the number.",
    },
    {
      id: 5,
      icon: <a target="_blank" rel="noopener noreferrer" alt="Github link" href="https://github.com/afroz23/afrozquraishi" ><FaGithub className="commonIcons" /></a>,
      icon2: <a target="_blank" rel="noopener noreferrer" alt="Deploy link" href="https://afrozquraishi.herokuapp.com/" ><GrDeploy className="commonIcon" /></a>,
      heading: "Portfolio",
      text:"This is my portfolio created with Reactjs.",
    },
    {
      id: 6,
      icon: <a target="_blank" rel="noopener noreferrer" alt="Github link" href="https://afrozquraishi.herokuapp.com" ><FaGithub className="commonIcons" /></a>,
      icon2: <a target="_blank" rel="noopener noreferrer" alt="Deploy link" href="https://afrozquraishi.herokuapp.com" ><GrDeploy className="commonIcon" /></a>,
      heading: "Comming soon....",
    },
  ]);
  return (
    <div id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="projects__box">
                  <div className="main-iconss">
                    {info.icon}{info.icon2}
                  </div>
                  <div className="projects__box-header">{info.heading}</div>
                  <div className="projects__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
