import Image from "next/image";
import Typed from "react-typed";
import { AiFillGithub } from "react-icons/ai";
import { Link, Element } from "react-scroll";
import { FaLinkedinIn, FaTwitter, FaMediumM } from "react-icons/fa";
import Button from "../../Components/Button";

import profile from "/public/Images/profile.svg";
import styles from "./Home.module.css";

const Home = () => {
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
                  <Button Width="15rem" Height="4rem" FontSize="25px">
                    <Link
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-55}
                      duration={500}
                      to="about"
                    >
                      More About me
                    </Link>
                  </Button>
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
                    href="https://afroz23.medium.com/"
                  >
                    <FaMediumM className={styles.headerIcon} />
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
};

export default Home;
