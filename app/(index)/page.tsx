import Blogs from "@/components/Blog/Blogs";
import Footer from "@/components/Footer/footer";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Project/Projects";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work/Work";
import WorkedProjects from "@/components/Works/WorkedProjects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home - Beedhan",
  description: "Portfolio website of Beedhan Bhuwai",
  openGraph: {
    title: "Home - Beedhan",
    description: "Portfolio website of Beedhan Bhuwai",
    url: "https://beedhan.dev",
    images: [
      {
        url: "https://res.cloudinary.com/beedhan/image/upload/v1747406919/Beedhan.dev.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};
const Home = () => {
  return (
    <>
      <Hero />
      <Work />
      <Projects />
      <WorkedProjects />
      <Skills />
      <Blogs />
    </>
  );
};

export default Home;
