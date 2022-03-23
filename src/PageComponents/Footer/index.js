import { MdCopyright } from "react-icons/md";

import styles from "./Footer.module.css";

const Footer=()=> {
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

export default Footer;