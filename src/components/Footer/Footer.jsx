import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <hr />
      <div className={styles.footer__nav}>
        <div className={styles.footer__nav__links}>
          <li className={styles.footer__nav__items}>about us</li>
          <li className={styles.footer__nav__items}>tour</li>
          <li className={styles.footer__nav__items}>help</li>
          <li className={styles.footer__nav__items}>blog</li>
          <li className={styles.footer__nav__items}>chat</li>
          <li className={styles.footer__nav__items}>data</li>
          <li className={styles.footer__nav__items}>legal</li>
          <li className={styles.footer__nav__items}>privacy policy</li>
          <li className={styles.footer__nav__items}>work here</li>
          <li className={styles.footer__nav__items}>advertising info</li>
          <li className={styles.footer__nav__items}>mobile</li>
          <li className={styles.footer__nav__items}>contact us</li>
          <li className={styles.footer__nav__items}>feedback</li>
        </div>
        <div className={styles.footer__nav__social}>
          <i
            class="fa-brands fa-twitter"
            style={{ color: "#a3a3a3", cursor: "pointer" }}
          ></i>
          <i
            class="fa-brands fa-facebook"
            style={{ color: "#a3a3a3", cursor: "pointer" }}
          ></i>
          <i
            class="fa-brands fa-dribbble"
            style={{ color: "#a3a3a3", cursor: "pointer" }}
          ></i>
        </div>
      </div>
      <hr />
      <div className={styles.footer_category_links}>
        <div
          className={`${styles.footer_category_items} ${styles.footer__technology}`}
        >
          <h4 className={styles.footer_category_heading}>Technology</h4>
          <div className={styles.footer_category_submenu}>
            <div className={styles.footer_category_sublist}>
              <li className={styles.footer_category_subitems}>
                Stack Overflow
              </li>
              <li className={styles.footer_category_subitems}>Server Fault</li>
              <li className={styles.footer_category_subitems}>Super User</li>
              <li className={styles.footer_category_subitems}>
                Web Application
              </li>
              <li className={styles.footer_category_subitems}>Ask Ubuntu</li>
              <li className={styles.footer_category_subitems}>Webmasters</li>
              <li className={styles.footer_category_subitems}>
                Game Development
              </li>
              <li className={styles.footer_category_subitems}>TeX - LaTex</li>
            </div>
            <div className={styles.footer_category_sublist}>
              <li className={styles.footer_category_subitems}>Programmers</li>
              <li className={styles.footer_category_subitems}>Unix & Linux</li>
              <li className={styles.footer_category_subitems}>
                {" "}
                Ask Different (Apple){" "}
              </li>
              <li className={styles.footer_category_subitems}>
                WordPress Developement
              </li>
              <li className={styles.footer_category_subitems}>
                Geographic Infromation Systems
              </li>
              <li className={styles.footer_category_subitems}>
                Electrical Engineering
              </li>
              <li className={styles.footer_category_subitems}>
                Android Enthusiasts
              </li>
              <li
                className={`${styles.footer_category_subitems} ${styles.more}`}
              >
                50 + more
              </li>
            </div>
          </div>
        </div>
        <div className={styles.footer_category_items}>
          <h4 className={styles.footer_category_heading}>Life / Arts</h4>
          <div className={styles.footer_category_sublist}>
            <li className={styles.footer_category_subitems}>Photography</li>
            <li className={styles.footer_category_subitems}>
              Science Fiction and Fantasy
            </li>
            <li className={styles.footer_category_subitems}>Graphic Design</li>
            <li className={styles.footer_category_subitems}>
              Seasoned Advice(cooking)
            </li>
            <li className={styles.footer_category_subitems}>
              Home Improvement
            </li>
            <li className={styles.footer_category_subitems}>
              Personal Finance & Mone
            </li>
            <li className={`${styles.footer_category_subitems} ${styles.more}`}>
              19 more
            </li>
          </div>
        </div>
        <div className={styles.footer_category_items}>
          <h4 className={styles.footer_category_heading}>
            culture / recreation
          </h4>
          <div className={styles.footer_category_sublist}>
            <li className={styles.footer_category_subitems}>
              English Language & Usage
            </li>
            <li className={styles.footer_category_subitems}>Skeptics</li>
            <li className={styles.footer_category_subitems}>
              Yodeya (Judaism)
            </li>
            <li className={styles.footer_category_subitems}>Travel </li>
            <li className={styles.footer_category_subitems}>Christianity </li>
            <li className={styles.footer_category_subitems}>
              Arqade (gaming){" "}
            </li>
            <li className={styles.footer_category_subitems}>Bicycles </li>
            <li className={`${styles.footer_category_subitems} ${styles.more}`}>
              21 more{" "}
            </li>
          </div>
        </div>
        <div className={styles.footer_category_items}>
          <h4 className={styles.footer_category_heading}>Science</h4>
          <div className={styles.footer_category_sublist}>
            <li className={styles.footer_category_subitems}>Mathematics</li>
            <li className={styles.footer_category_subitems}>
              Cross Validated (stats)
            </li>
            <li className={styles.footer_category_subitems}>
              Theortical Computer Science
            </li>
            <li className={styles.footer_category_subitems}>Physics </li>
            <li className={styles.footer_category_subitems}>MathOverflow </li>
            <li className={styles.footer_category_subitems}>Chemistry </li>
            <li className={styles.footer_category_subitems}>Biology </li>
            <li className={`${styles.footer_category_subitems} ${styles.more}`}>
              5 more{" "}
            </li>
          </div>
        </div>
        <div className={styles.footer_category_items}>
          <h4 className={styles.footer_category_heading}>Others</h4>
          <div className={styles.footer_category_sublist}>
            <li className={styles.footer_category_subitems}>Stack Apps</li>
            <li className={styles.footer_category_subitems}>
              Meta Stack Exchange
            </li>
            <li className={styles.footer_category_subitems}>Area51</li>
            <li className={styles.footer_category_subitems}>
              Stack Overflow Careers
            </li>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.footer__text}>
        <div className={styles.footer__maintext}>
          {" "}
          site design / logo &copy; 2016 Stack Exchange Inc; user contribution
          licensed under cc by-saa 3.0 with attribution required
        </div>
        <div className={styles.footer__subtext}>rev 2016.8.1.3852</div>
      </div>
    </div>
  );
}

export default Footer;
