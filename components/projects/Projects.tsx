import { NextPage } from "next";
import React from "react";
import Project from "./Project";

const Projects: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Project
        name="Social editor"
        description={
          "You can create beautiful looking images using the social editor."
        }
        url="https://social-post-editor.netlify.app"
      />
      <Project
        name="Price List"
        description={"You can create price list for your business"}
        url="#"
      />
      <Project
        name="Restaurant App"
        description="Full stack restaurant food ordering app"
        url="#"
      />
    </div>
  );
};

export default Projects;
