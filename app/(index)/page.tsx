import Blogs from "@/components/Blog/Blogs";
import Hero from "@/components/Hero/Hero";
import Work from "@/components/Work/Work";
import React from "react";

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
