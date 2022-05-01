import { NextPage } from "next";
import React from "react";
import Project from "./Project";

const Projects: NextPage = () => {
  return (
    <div style={{ padding: "0px 50px" }}>
      <Project name="Social editor" />
      <Project name="Price List" />
      <Project name="Restaurant App" />
    </div>
  );
};

export default Projects;
