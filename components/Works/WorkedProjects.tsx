"use client";
import React, { useState } from "react";
import Sectioncontainer from "../sectioncontainer";
import ExpandAbleCard from "../shared/ExpandAbleCard";

const projects = [
  {
    id: "1",
    title: "Media In Action",
    subTitle: "Wordpress",
    description:
      "Converted provided design to a fully functional wordpress website.",
    link: "https://mediainaction.com.au",
  },
  {
    id: "2",
    title: "NSW Irrigation Council",
    subTitle: "Wordpress",
    description: "Designed and developed a fully functional wordpress website.",
    link: "https://www.nswic.org.au",
  },
  {
    id: "3",
    title: "Arctic Intelligence",
    subTitle: "Wordpress plugin",
    link: "https://arctic-intelligence.com",
    description:
      "Developed a wordpress plugin for Arctic Intelligence to integrate paddle payment gateway and XERO accounting software with their wordpress website",
  },
  {
    id: "4",
    title: "SKC Management",
    subTitle: "Fullstack app",
    description: [
      "Developed a fullstack web application for SKC Management to manage their labour hire business.",
      "The application is built using React, Node, Nestjs, and React Native.",
    ],
    link: "https://skclabourhire.com.au/",
  },
];
const WorkedProjects = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleElementSelect = (id: string | null) => {
    setSelectedId(id);
  };
  return (
    <Sectioncontainer title="Works">
      {projects.map((project) => (
        <ExpandAbleCard
          key={project.id}
          data={project}
          handleElementSelect={handleElementSelect}
          selectedId={selectedId}
        />
      ))}
    </Sectioncontainer>
  );
};

export default WorkedProjects;
