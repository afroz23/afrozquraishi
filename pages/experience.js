import React from "react";
import { FaSuitcase } from "react-icons/fa";
import styles from "../styles/css/Experience.module.css";
import { Element } from "react-scroll";

export default function Experience() {
  return (
    <Element name="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.experience_container}>
          <div className={styles.common}>
            <h1 className={styles.mainHeader}>Experience</h1>
            <div className={styles.commonBorder}></div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col_6}>
            <div className={styles.experience_content}>
              <div className={styles.title}>WORK EXPERIENCE</div>
              <div className={styles.border_left}>
                <div className={styles.experience_title}>
                  <div className={styles.suitcase}>
                    <FaSuitcase />
                  </div>
                  <div>Software Engineer, Element Zero labs</div>
                </div>
                <div className={styles.date}>March, 2022 - Present</div>
                <div className={styles.detail}>
                  <div className={styles.text}>
                    Building <strong>Carbon.xyz</strong> for production.
                  </div>
                  <br />
                  <div className={styles.text}>
                    Wrote clean, optimized and production-ready code.
                    <br />
                    <strong>Tech Stack</strong> TypeScript, Nextjs, GraphQL.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.experience_content}>
              <div className={styles.border_left}>
                <div className={styles.experience_title}>
                  <div className={styles.suitcase}>
                    <FaSuitcase />
                  </div>
                  <div>OnOrAll Startup, Software Engineer, Next.js</div>
                </div>
                <div className={styles.date}>December, 2021 - Present</div>
                <div className={styles.detail}>
                  <div className={styles.text}>
                    Developed work base area of a user added more functionality
                    such as filter, select multiple rows to delete at once,
                    search, edit and delete. Developed SignIn and SignUp
                    UserInterface and added validation to each field.
                  </div>
                  <br />
                  <div className={styles.text}>
                    Daily minimum 30min work and team/product discussions and
                    gave productive ideas. Wrote clean and production ready
                    code.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.experience_content}>
              <div className={styles.border_left}>
                <div className={styles.experience_title}>
                  <div className={styles.suitcase}>
                    <FaSuitcase />
                  </div>
                  <div>
                    GirlScript Summer of Code&apos;20, Open Source Contributor
                  </div>
                </div>
                <div className={styles.date}>
                  March, 2020 - May, 2020 (3 months)
                </div>
                <div className={styles.detail}>
                  <div className={styles.text}>
                    It is the 3 month-long Open Source program during summers
                    conducted by GirlScript Foundation.
                  </div>
                  <br />
                  <div className={styles.text}>
                    Contributed to the <strong>Algo_Ds_Notes</strong> project
                    where I included some Algorithms. While I learned a lot of
                    things in Git and Github.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.col_6}>
            <div className={styles.experience_content}>
              <div className={styles.title}>DEVELOPMENT EXPERIENCE</div>
              <ul className={styles.ul}>
                <div className={styles.li}>ALGORITHMS & DATA STRUCTURES</div>
                <div className={styles.li}>FRONTEND DEVELOPMENT</div>
                <div className={styles.skill}>
                  HTML, CSS, Reactjs+Redux, Nextjs, TailwindCSS, Reactstrap,
                  React Icons, Chartjs
                </div>
                <div className={styles.li}>BACKEND DEVELOPMENT</div>
                <div className={styles.skill}>Node.js</div>
                <div className={styles.li}>REST APIS</div>
                <div className={styles.skill}>Express.js Framework</div>
                <div className={styles.li}>DATABASES</div>
                <div className={styles.skill}>MongoDB</div>
                <div className={styles.li}>PROGRAMMING LANGUAGE</div>
                <div className={styles.skill}>C++, Javascript</div>
                <div className={styles.li}>TOOLS & SERVICES</div>
                <div className={styles.skill}>
                  Git, Github, Visual Studio, Linux, Postman, Heroku, Netlify
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
