import React from "react";
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyCenter">
            <div className="col-6">
              <div className="allinone">
                <div className="contactSection-logo">
                <h1>Get In Touch</h1>
                <p>Email me: afroziiitian@gmail.com</p>
                </div>
                <div className="contactCircles">
                    <p className="para-links"><a target="_blank" rel="noopener noreferrer" href="https://github.com/afroz23">Github</a></p>
                    <p className="para-links"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/afrozquraishi/"> LinkedIn</a></p>
                    <p className="para-links"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AfrozQuraishi_"> Twitter</a></p>
                    <p className="para-links"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/afrozquraishi_/">Instagram</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="last-footer">
      © 2021, Built with <p><a className="last-anchor" target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React</a></p>
      </div>
      </div>
    </div>
  );
};
export default Contact;