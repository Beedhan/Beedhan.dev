"use client"
import React, { useId, useState } from "react";
import Sectioncontainer from "../sectioncontainer";
import WorkCard from "./WorkCard";

const Work = () => {
  const history = [
    {
      title: "FullStack Web Developer",
      company: "Sozo Creations",
      work: [
        "Developed ERM software for a cleaning company.",
        "Assisted with frontend development in React project and developed backend using Nestjs and mobile app using React Native",
        "Worked on multiple wordpress websites including ecommerce site",
        "Helped setting up shopify store for a client",
      ],
      id: useId(),
    },
    {
      title: "FullStack Web Developer",
      company: "Freelance",
      work: [
        "Developed full stack food ordering app for restaurant using React. React Native. Laravel",
      ],
      id: useId(),
    },
    {
      title: "Software developer and Instructor",
      company: "Xdezo Technologies",
      work: [
        "Developed website for agency.",
        "Taught Frontend Development to students, creating lesson plans and delivering engaging lectures.",
      ],
      id: useId(),
    },
  ];
  const [selectedId,setSelectedId] = useState<string|null>(null);
  const handleElementSelect = (id:string|null)=>{
    setSelectedId(id);
  }
  return (
    <Sectioncontainer title="Works">
      {history.map((e) => (
        <WorkCard key={e.id} data={e} selectedId={selectedId} handleElementSelect={handleElementSelect}/>
      ))}
    </Sectioncontainer>
  );
};

export default Work;
