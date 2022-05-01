import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/home/hero/HeroSection";
import MeSection from "../components/home/me/MeSection";
import Navbar from "../components/home/nav/navbar";
import TechnologiesSection from "../components/technologies/TechnologiesSection";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <MeSection />
      <TechnologiesSection />
    </div>
  );
};

export default Home;
