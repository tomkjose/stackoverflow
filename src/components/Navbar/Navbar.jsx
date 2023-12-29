import React from "react";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__searchContainer}>
        <i
          class="fa-solid fa-magnifying-glass"
          style={{ color: "#a3a3a3" }}
        ></i>
        <input
          type="search"
          className={styles.nav__searchbox}
          placeholder="Search..."
        />
      </div>
      <div className={styles.nav__menu}>
        <div className={styles.nav__items}>
          <i class="fa-solid fa-life-ring" style={{ color: "#a3a3a3" }}></i>{" "}
          <p className={styles.nav__text}>Help</p>
        </div>
        <div className={styles.nav__items}>
          <i class="fa-solid fa-desktop" style={{ color: "#a3a3a3" }}></i>
          <p className={styles.nav__text}>Tour</p>
        </div>
        <div className={styles.nav__user}>
          <img
            alt="avatar"
            src="https://globalhydraulics.com.sg/wp-content/uploads/2021/03/mike.jpg"
            className={styles.nav__avatar}
          />
          <i class="fa-solid fa-caret-down" style={{ color: "#c2c2c2" }}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
