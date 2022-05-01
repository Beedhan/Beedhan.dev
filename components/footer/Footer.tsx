import { NextPage } from "next";
import React from "react";
import styles from "./footer.module.css";
const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Designed & Developed by Bidhan Bhuwai
      </a>
    </footer>
  );
};

export default Footer;
