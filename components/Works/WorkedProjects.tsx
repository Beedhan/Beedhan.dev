"use client";
import React, { useState } from "react";
import Sectioncontainer from "../sectioncontainer";
import ExpandAbleCard from "../shared/ExpandAbleCard";

const projects = [
  {
    id: "1",
    title: "Media In Action",
    subTitle: "Wordpress",
    description: [
      "Converted a provided design into a fully functional WordPress website.",
      "Optimized the site for fast loading times and mobile responsiveness.",
      "Integrated a portfolio showcase for their projects.",
      "Set up a blog section for company news and updates.",
      "Implemented contact forms and social media integration.",
      "The result is a professional, user-friendly website that effectively showcases the client's media services and portfolio.",
    ],
    link: "https://mediainaction.com.au",
    tech: ["Wordpress", "Elementor"],
  },
  {
    id: "2",
    title: "NSW Irrigation Council",
    subTitle: "Wordpress",
    description: [
      "Designed and developed a fully functional WordPress website for the NSW Irrigation Council.",
      "Created a custom design that aligns with the organization's branding and mission.",
      "Developed a responsive WordPress theme with Elementor.",
      "Implemented an intuitive navigation structure for easy access to information about irrigation policies, projects, and resources.",
      "Integrated a news sections.",
      "Optimized the site for search engines to improve visibility.",
      "The final product is a comprehensive, user-friendly website that serves as a valuable resource for NSW irrigation stakeholders.",
    ],
    link: "https://www.nswic.org.au",
    tech: ["Wordpress", "Elementor"],
  },
  {
    id: "3",
    title: "Arctic Intelligence",
    subTitle: "Custom Wordpress plugin",
    link: "https://arctic-intelligence.com",
    description: [
      "Developed a custom WordPress plugin for Arctic Intelligence to integrate the Paddle payment gateway and Xero accounting software with Pabbly to their WordPress website.",
      "Created a seamless integration between WordPress, Paddle, and Xero.",
      "Implemented automatic invoice generation and syncing with Xero upon successful Paddle payments.",
      "Created detailed documentation for easy maintenance and future updates.",
      "The plugin significantly streamlined Arctic Intelligence's payment processing and accounting workflows, saving time and reducing manual data entry errors.",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "4",
    title: "SKC Management",
    subTitle: "Fullstack app",
    description: [
      "Developed a comprehensive fullstack web application for SKC Management to streamline their labour hire business operations.",
      "Built a responsive web interface with React for admin users.",
      "Created a mobile app using React Native for on-site workers.",
      "Developed a robust backend API with NestJS.",
      "Implemented real-time updates and notifications using Expo.",
      "Designed advanced reporting and analytics dashboards.",
      "Implemented worker onboarding and document management features.",
      "Created a shift scheduling and management system.",
      "Developed time and attendance tracking with geolocation.",
      "Built a integration between wordpress forms and admin dashboard.",
      "This custom solution has significantly improved SKC Management's operational efficiency, reduced administrative overhead, and enhanced communication between all stakeholders in the labour hire process.",
    ],
    link: "https://skclabourhire.com.au/",
    tech: ["React", "React Native", "Nestjs"],
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
