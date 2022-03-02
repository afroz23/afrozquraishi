import { useState } from "react";
import { FaCode } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
export default function Navbar() {
    const [open, setOpen] = useState(false);

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
                            onClick={() => scroll.scrollToTop()}
                            to="home"
                        >
                            <FaCode className={styles.navbar__left_logo} />
                        </Link>
                    </div>

                    <ul
                        className={styles.navbar__right}
                        style={{
                            transform: open ? "translateX(0px)" : "",
                        }}
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
                    <div
                        className={styles.burger}
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        {open ? (
                            <ImCross
                                style={{
                                    color: "#ff4321",
                                }}
                            />
                        ) : (
                            <GiHamburgerMenu />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
