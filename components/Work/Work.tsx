"use client";
import { useId, useState } from "react";
import Sectioncontainer from "../sectioncontainer";
import ExpandAbleCard from "../shared/ExpandAbleCard";

const Work = () => {
  const history = [
    {
      title: "FullStack Web Developer",
      subTitle: "Sozo Creations",
      description: [
        "Developed ERM software for a cleaning company.",
        "Assisted with frontend development in React project and developed backend using Nestjs and mobile app using React Native",
        "Worked on multiple wordpress websites including ecommerce site",
        "Helped setting up shopify store for a client",
      ],
      time: "2020-Current",
      id: useId(),
    },
    {
      title: "FullStack Web Developer",
      subTitle: "Freelance",
      description: [
        "Developed full stack food ordering app for restaurant using React. React Native. Laravel",
      ],
      time: "2019-Current",
      id: useId(),
    },
    {
      title: "Software developer and Instructor",
      subTitle: "Xdezo Technologies",
      description: [
        "Developed website for agency.",
        "Taught Frontend Development to students, creating lesson plans and delivering engaging lectures.",
      ],
      time: "2019-2020",
      id: useId(),
    },
  ];
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleElementSelect = (id: string | null) => {
    setSelectedId(id);
  };
  return (
    <Sectioncontainer title="Experiences">
      {history.map((e) => (
        <ExpandAbleCard
          key={e.id}
          data={e}
          selectedId={selectedId}
          handleElementSelect={handleElementSelect}
        />
      ))}
    </Sectioncontainer>
  );
};

export default Work;
