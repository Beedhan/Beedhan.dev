import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
const Navbar: NextPage = () => {
  const router = useRouter();
  const activeUrl = router.pathname;
  const getActive = (path: string): string | undefined => {
    if (path === activeUrl) {
      return styles.active;
    } else {
      return undefined;
    }
  };
  return (
    <>
      <Head>
        <title>Beedhan</title>
        <meta name="description" content="Portfolio of Beedhan Bhuwai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <ul className={styles.navcontainer}>
          <li className={getActive("/")}>
            <Link href="/">Home</Link>
          </li>
          <li className={getActive("/projects")}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={getActive("/blogs")}>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className={getActive("/contact")}>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
