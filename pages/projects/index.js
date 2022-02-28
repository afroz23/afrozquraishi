import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import styles from "./Projects.module.css";
import { Element } from "react-scroll";
import { projectDetails } from "../../Components/projectDetails";
export default function Projects() {
    return (
        <Element name="projects" className={styles.projects}>
            <div className={styles.projects_container}>
                <div className={styles.projects__header}>
                    <div className={styles.common}>
                        <h1 className={styles.mainHeader}>Projects</h1>
                        <div className={styles.commonBorder}></div>
                    </div>
                    <div className={styles.card_container}>
                        {projectDetails.map((project, i) => {
                            return (
                                <div key={i} className={styles.card}>
                                    <div className={styles.main_iconss}>
                                        {project.projectLink && (
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                alt="Github link"
                                                href={project.projectLink}
                                            >
                                                <FaGithub
                                                    className={
                                                        styles.commonIcons
                                                    }
                                                />
                                            </a>
                                        )}

                                        {project.deployLink && (
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                alt="Deploy link"
                                                href={project.deployLink}
                                            >
                                                <GrDeploy
                                                    className={
                                                        styles.commonIcon
                                                    }
                                                />
                                            </a>
                                        )}
                                    </div>
                                    {project.projectTitle && (
                                        <div className={styles.card_header}>
                                            {project.projectTitle}
                                        </div>
                                    )}
                                    {project.projectDetail && (
                                        <div className={styles.card_p}>
                                            {project.projectDetail}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Element>
    );
}
