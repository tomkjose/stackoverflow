import React from "react";
import styles from "./RightSidbar.module.css";
import NetworkCard from "../NetworkCard/NetworkCard";
import JobCard from "../JobCard/JobCard";
function RightSidebar() {
  return (
    <div className={styles.right_sidebar}>
      <JobCard />
      <NetworkCard />
    </div>
  );
}

export default RightSidebar;
