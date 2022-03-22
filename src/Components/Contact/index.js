import Image from "next/image";
import { Element } from "react-scroll";

import styles from "./Contact.module.css";
import contactImage from "/public/Images/contact.svg";

export default function Contact() {
  return (
    <Element name="contact">
      <div className={styles.contact}>
        <div className={styles.common}>
          <h1 className={styles.mainHeader}>Get In Touch</h1>
          <div className={styles.commonBorder}></div>
        </div>
        <div className={styles.flexSystem}>
          <div className={styles.backImage}>
            <Image
              src={contactImage}
              alt="contact Image"
              width="300px"
              height="300px"
            />
          </div>
          <div className={styles.container}>
            <p className={styles.contact_info}>
              I&apos;m available on LinkedIn, Twitter and Instagram. Mails and
              LinkedIn are the best way to communicate though. You can reach out
              to me any time.
            </p>
            <div className={styles.contactSection_logo}>
              <p>
                <a className={styles.link} href="mailto:afroziiitian@gmail.com">
                  Send email
                </a>
              </p>
            </div>
            <div className={styles.contactCircles}>
              <p className={styles.para_links}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/afroz23"
                  className={styles.link}
                >
                  Github
                </a>
              </p>
              <span className={styles.line}> | </span>
              <p className={styles.para_links}>
                <a
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/afrozquraishi/"
                >
                  {" "}
                  LinkedIn
                </a>
              </p>
              <span className={styles.line}> | </span>
              <p className={styles.para_links}>
                <a
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/AfrozQuraishi_"
                >
                  {" "}
                  Twitter
                </a>
              </p>
              <span className={styles.line}> | </span>
              <p className={styles.para_links}>
                <a
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/afrozquraishi_/"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

// https://data.typeracer.com/pit/profile?user=afroz23
