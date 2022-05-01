import { NextPage } from "next";
import React from "react";
import styles from "./technologies.module.css";
const TechnologiesSection: NextPage = () => {
  return (
    <div className={styles.technologiesContainer}>
      <h1>Technologies I Use</h1>
      <div className={styles.techlists}>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Nodejs</li>
        </ul>
        <ul>
          <li>Laravel</li>
          <li>Wordpress</li>
        </ul>
      </div>
    </div>
  );
};

export default TechnologiesSection;
