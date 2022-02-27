import React, { useState } from "react";
import { FaAlignJustify, FaCode } from "react-icons/fa";
import styles from "../styles/Home.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    const [state, setState] = useState(false);
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.navbar__container}>
                    <div className={styles.navbar__left}>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-55}
                            duration={500}
                            className={styles.navbar__left_logo}
                            onClick={() => scroll.scrollToTop()}
                        >
                            <FaCode />
                        </Link>
                    </div>

                    <ul
                        className={styles.navbar__right}
                        style={{ transform: state ? "translateX(0px)" : "" }}
                    >
                        <li className={styles.item_list}>
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-55}
                                duration={500}
                                to="home"
                            >
                                Home
                            </Link>
                        </li>
                        <li className={styles.item_list}>
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-55}
                                duration={500}
                                to="about"
                            >
                                About
                            </Link>
                        </li>

                        <li className={styles.item_list}>
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-55}
                                duration={500}
                            >
                                Experience
                            </Link>
                        </li>
                        <li className={styles.item_list}>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-55}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className={styles.item_list}>
                            <a
                                href="https://afroziiitian.medium.com/"
                                target="_blank"
                            >
                                Blog
                            </a>
                        </li>
                        <li className={styles.item_list}>
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-55}
                                duration={500}
                                to="contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.toggle}>
                    <FaAlignJustify
                        onClick={() => setState(!state)}
                    ></FaAlignJustify>
                </div>
            </div>
        </div>
    );
}
