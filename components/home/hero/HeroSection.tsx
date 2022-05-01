import { NextPage } from "next";
import React from "react";
import HeyEmoji from "../../misc/HiEmoji/HeyEmoji";
import styles from "./hero.module.css";
const HeroSection: NextPage = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.intro}>
        <h1 style={{ position: "relative" }}>
          Hei,Hei
          <HeyEmoji />
        </h1>
        <h1>{`I'm Beedhan`}</h1>
        <br />
        <a href="#">Contact Me</a>
      </div>
    </div>
  );
};

export default HeroSection;
