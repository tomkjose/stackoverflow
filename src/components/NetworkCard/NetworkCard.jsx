import React from "react";
import styles from "./NetworkCard.module.css";
function NetworkCard() {
  return (
    <div className={styles.network_card}>
      <h3 className={styles.network_title}>hot</h3>
      <p className={styles.network_sub_title}>Network Question</p>
      <div>
        <div className={styles.network_questions_container}>
          <img
            src="https://cdn.sstatic.net/Sites/hardwarerecs/Img/apple-touch-icon.png"
            alt="h logo"
            className={styles.network_image}
          />
          <p className={styles.network_questions}>
            Were there women who where againest giving women the right vote ?
          </p>
        </div>
        <div className={styles.network_questions_container}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
            className={styles.network_image}
            alt="stack overflow"
          />
          <p className={styles.network_questions}>
            Why does everybody typedef over standard C types?
          </p>
        </div>
        <div className={styles.network_questions_container}>
          <img
            src="https://cdn.sstatic.net/Sites/ell/Img/icon-48.png"
            alt=" logo"
            className={styles.network_image}
          />
          <p className={styles.network_questions}>
            An English word describing a pseudo-job
          </p>
        </div>
        <div className={styles.network_questions_container}>
          <img
            src="https://i.stack.imgur.com/7igQf.png"
            alt="travel stack"
            className={styles.network_image}
          />
          <p className={styles.network_questions}>
            When flying on a very tight schedule, are you obligated to run to
            make it to the next gate on a connection?
          </p>
        </div>
        <div className={styles.network_questions_container}>
          <img
            src="https://cdn.sstatic.net/Sites/superuser/Img/apple-touch-icon.png"
            alt="superuser"
            className={styles.network_image}
          />
          <p className={styles.network_questions}>
            Does 1 pixel have a standard size ?
          </p>
        </div>
        <p className={styles.network_questions}>VIEW ALL JOBS</p>
      </div>
    </div>
  );
}

export default NetworkCard;
