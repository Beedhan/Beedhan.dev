import React from "react";
import Sectioncontainer from "../sectioncontainer";

const skills = [
  "React",
  "Next.js",
  "Typescript",
  "Node.js",
  "Laravel",
  "Postgres",
  "Wordpress",
];
const Skills = () => {
  return (
    <Sectioncontainer title="Skills">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            className="bg-primary text-text-secondary font-semibold text-sm px-2 py-1 rounded-full mr-1 hover:bg-tertiary hover:text-primary"
            key={index}
          >
            {skill}
          </div>
        ))}
      </div>
    </Sectioncontainer>
  );
};

export default Skills;
