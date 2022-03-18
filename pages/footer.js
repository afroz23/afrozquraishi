import React from "react";
import styles from "../styles/css/Footer.module.css";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.bottom}>
        <div className={styles.main_footer}>
          <MdCopyright />
          <p>
            2022 Built with{" "}
            <span>
              <a href="https://nextjs.org/docs">Next.js</a>
            </span>{" "}
            | Afroz Quraishi
          </p>
        </div>
      </div>
    </div>
  );
}
