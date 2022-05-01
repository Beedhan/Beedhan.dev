import { NextPage } from "next";
import React from "react";
import styles from "./me.module.css";
const MeSection: NextPage = () => {
  return (
    <div className={styles.aboutMe}>
      <h1>Me </h1>
      <p>
        I got into the world of programming at the age of 16. I started my
        journey by developing and tinkering with
        <span style={{ fontWeight: "bold" }}> Unity3d</span>. My interest in web
        development started after joining college for bachelor degree.
      </p>
    </div>
  );
};

export default MeSection;
