import Head from "next/head";
import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/home/nav/navbar";
import Index from "../components/projects/Projects";

const Projects = () => {
  return (
    <>
      <Head>
        <title>My Projects</title>
      </Head>
      <Index />
    </>
  );
};
export default Projects;
