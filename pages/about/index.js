import React, { useState } from "react";
import styles from "./About.module.css";
import Image from "next/image";
import { Element } from "react-scroll";
import afrozquraishi from "../Images/afrozquraishi.png";
// import download from "js-file-download";
// import axios from "axios";
export default function About() {
    // function handleDownload() {
    //     axios({
    //         url: "http://localhost:8000/download",
    //         method: "GET",
    //         responseType: "blob",
    //     })
    //         .then((res) => download(res.data, "Afroz_Quraishi_resume.pdf"))
    //         .catch((error) => {
    //             console.log("something went wrong");
    //         });
    // }

    return (
        <Element name="about" className={styles.about}>
            <div className={styles.about_container}>
                <div className={styles.common}>
                    <h1 className={styles.mainHeader}>About Me</h1>
                    <div className={styles.commonBorder}></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col_6}>
                        <div className={styles.banner__img}>
                            <Image
                                className={styles.afrozquraishi}
                                src={afrozquraishi}
                                alt="afrozquraishi pic"
                                width="280px"
                                height="280px"
                            />
                        </div>
                    </div>
                    <div className={styles.col_6}>
                        <div className={styles.about__info}>
                            <h1>Hello There!</h1>
                            <div className={styles.aboutMe}>
                                <div className={styles.about__info_p1}>
                                    I&apos;m a prefinal year student pursuing an
                                    Integrated Post Graduate (B.Tech + M.Tech)
                                    in the Department of Information Technology
                                    at{" "}
                                    <span className={styles.about_text}>
                                        IIIT Gwalior.
                                    </span>{" "}
                                    (ABV-Indian Institute of Information
                                    Technology and Management Gwalior). and
                                    I&apos;m a{" "}
                                    <span className={styles.about_text}>
                                        front-end developer
                                    </span>{" "}
                                    with one year of experience. and I have been
                                    working with{" "}
                                    <span className={styles.about_text}>
                                        React/Redux
                                    </span>{" "}
                                    and related libraries/frameworks since 2021.
                                </div>
                                <div className={styles.about__info_p2}>
                                    Currently, I&apos;m working at a startup and
                                    Looking for a Summer Internship in the SDE
                                    role. Apart from this, I am a problem solver
                                    and I solve Data Structure and Algorithms
                                    problems on LeetCode, CodeChef.
                                </div>
                            </div>

                            <div className={styles.resume}>
                                <p>
                                    <a
                                        className={styles.link}
                                        href="https://drive.google.com/file/d/1z-wjgOCZORI6fIPOa7aBESVSohO_UC0M/view?usp=sharing"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Download resume
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}
