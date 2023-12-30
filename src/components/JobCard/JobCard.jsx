import React from "react";
import styles from "./JobCard.module.css";
function JobCard() {
  return (
    <div className={styles.jobcard}>
      <h3 className={styles.job_title}>Jobs</h3>
      <p className={styles.job_sub_title}>Looking out for...</p>
      <div className={styles.job_details_container}>
        <div className={styles.job_progress_point}></div>
        <div className={styles.job_detail_main}>
          <div className={styles.job_detail_title}>
            Front End Developer with Angular
          </div>
          <div className={styles.job_detail_description}>WalletHub</div>
          <div className={styles.job_location}>
            Washington, DC{" "}
            <i
              class="fa-solid fa-earth-americas"
              style={{ paddingRight: "0.4rem", paddingLeft: "0.4rem" }}
            ></i>
            Remote{" "}
          </div>
          <div className={styles.job_tags}>
            <div className={styles.job_tag}>Angular Js</div>
            <div className={styles.job_tag}>Cordova</div>
          </div>
        </div>
        <div className={styles.job_progress_point}></div>
        <div className={styles.job_detail_main}>
          <div className={styles.job_detail_title}>
            Senior iOS / iPhone Engineer{" "}
          </div>
          <div className={styles.job_detail_description}>Perk.com INC</div>
          <div className={styles.job_location}>
            <i
              className="fa-solid fa-location-dot"
              style={{ paddingRight: "0.4rem", paddingLeft: "0.4rem" }}
            ></i>{" "}
            Bangalore, India{" "}
            <i
              className="fa-solid fa-building"
              style={{ paddingRight: "0.4rem", paddingLeft: "0.4rem" }}
            ></i>{" "}
            In office{" "}
          </div>
          <div className={styles.job_tags}>
            <div className={styles.job_tag}>iOS</div>
            <div className={styles.job_tag}>Phone</div>
          </div>
        </div>
        <div className={`${styles.job_progress_point} ${styles.job_checked}`}>
          <i
            className="fa-solid fa-check"
            style={{ display: "inline-block", color: " rgb(52, 167, 224)" }}
          ></i>
        </div>
        <div className={styles.job_detail_main}>
          <div className={styles.job_detail_title}>Software Engineer</div>
          <div className={styles.job_detail_description}>
            Spark NET Technologies
          </div>
          <div className={styles.job_salary}>$25,000 - $40,000</div>
          <div className={styles.job_location}>
            {" "}
            <i
              className="fa-solid fa-location-dot"
              style={{ paddingRight: "0.4rem", paddingLeft: "0.4rem" }}
            ></i>{" "}
            No Location{" "}
            <i
              className="fa-solid fa-earth-americas"
              style={{ paddingRight: "0.4rem", paddingLeft: "0.4rem" }}
            ></i>{" "}
            Remote{" "}
          </div>
          <div className={styles.job_saved}>Saved</div>
          <div className={styles.job_tags}>
            <div className={styles.job_tag}>iOS</div>
            <div className={styles.job_tag}>ruby on rails</div>
          </div>
        </div>
      </div>
      <div className={styles.job_view}>View all jobs</div>
    </div>
  );
}

export default JobCard;
