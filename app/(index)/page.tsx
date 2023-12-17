import Blogs from "@/components/Blog/Blogs";
import Hero from "@/components/Hero/Hero";
import Work from "@/components/Work/Work";
import { Metadata } from "next";
import React from "react";

export const metadata:Metadata = {
  title:"Home - Beedhan",
  description:"Portfolio website of Beedhan Bhuwai",
}
const Home = () => {
  return (
    <div>
      <Hero />
      <Work />
      <Blogs />
    </div>
  );
};

export default Home;
