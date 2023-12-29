import React from "react";
import styles from "./LeftSidebar.module.css";
function LeftSidebar() {
  return (
    <div className={styles.LeftSidebar}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png"
        alt="logo"
        className={styles.logo}
      />
      <div className={styles.left_navbar}>
        <li className={styles.left_navbar_list}>
          {" "}
          <i className="fa-solid fa-question"></i>
          <p className={styles.left_navbar_text}>Questions</p>
        </li>
        <li className={styles.left_navbar_list}>
          <i className="fa-solid fa-suitcase"></i>{" "}
          <p className={styles.left_navbar_text}>Jobs</p>
        </li>
        <li className={styles.left_navbar_list}>
          {" "}
          <i className="fa-regular fa-file"></i>{" "}
          <p className={styles.left_navbar_text}>
            Documentation <sup className={styles.left_navbar_super}>New</sup>
          </p>
        </li>
        <li className={styles.left_navbar_list}>
          {" "}
          <i className="fa-solid fa-tag"></i>{" "}
          <p className={styles.left_navbar_text}>Tags</p>
        </li>
        <li className={styles.left_navbar_list}>
          <i className="fa-solid fa-user"></i>{" "}
          <p className={styles.left_navbar_text}>Users</p>
        </li>
        <li className={styles.left_navbar_list}>
          <i className="fa-regular fa-bookmark"></i>{" "}
          <p className={styles.left_navbar_text}>Badges</p>
        </li>
        <li className={styles.left_navbar_list}>
          {" "}
          <i className="fa-solid fa-bullhorn"></i>{" "}
          <p className={styles.left_navbar_text}>Ask Questions</p>
        </li>
        <li className={styles.left_navbar_list}>
          <i className="fa-brands fa-stack-exchange"></i>{" "}
          <p className={styles.left_navbar_text}>Stack Exchange</p>
        </li>
        <li className={styles.left_navbar_list}>
          <i className="fa-solid fa-inbox" style={{}}></i>{" "}
          <p className={styles.left_navbar_text}>
            Inbox <span className={styles.left_navbar_inboxcount}>24</span>
          </p>
        </li>
      </div>
    </div>
  );
}

export default LeftSidebar;
