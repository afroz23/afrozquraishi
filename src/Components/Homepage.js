import React from "react";
import Image from "next/image";
import styles from "../../styles/css/Home.module.css";
import Typed from "react-typed";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import profile from "../../public/Images/profile.svg";
import { Link, Element, animateScroll as scroll } from "react-scroll";
function Home() {
  return (
    <Element name="home">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_6}>
            <div className={styles.header__content}>
              <div className={styles.header__section}>
                <div className={styles.header_font_size}>
                  <div>
                    Hi, I'm <span className={styles.span_afroz}>Afroz</span>{" "}
                    Quraishi
                  </div>
                </div>
                <Typed
                  className={styles.typed_text}
                  strings={[
                    "Competitive Programmer",
                    "Full Stack Developer",
                    "Open Source Contributor",
                    "Problem Solver",
                  ]}
                  typeSpeed={80}
                  backSpeed={10}
                  loop
                ></Typed>

                <div className={styles.header__buttons}>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                    to="about"
                    className={styles.more_about}
                  >
                    More About me
                  </Link>
                </div>
                <div className={styles.header__ul}>
                  <a
                    className={styles.header_anchor}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/afroz23"
                  >
                    <AiFillGithub className={styles.headerIcon} />
                  </a>
                  <a
                    className={styles.header_anchor}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/afrozquraishi/"
                  >
                    <FaLinkedinIn className={styles.headerIcon} />
                  </a>
                  <a
                    className={styles.header_anchor}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/AfrozQuraishi_"
                  >
                    <FaTwitter className={styles.headerIcon} />
                  </a>
                  <a
                    className={styles.header_anchor}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/afrozquraishi_/"
                  >
                    <FaInstagram className={styles.headerIcon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.col_6}>
            <div className={styles.banner__img}>
              <Image
                className={styles.profile}
                src={profile}
                alt="profile pic"
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Home;
