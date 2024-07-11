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
        "Led the development of a comprehensive ERM software solution for a cleaning company, streamlining operations and improving efficiency.",
        "Led frontend development using React, while simultaneously architecting and implementing the backend using NestJS.",
        "Developed a cross-platform mobile application using React Native, ensuring seamless user experience across iOS and Android devices.",
        "Successfully delivered multiple WordPress websites, including a high-performance e-commerce solution that increased client's online sales by 30%.",
        "Implemented and optimized a Shopify store for a client, resulting in improved user engagement and a 25% increase in conversion rates.",
      ],
      time: "2020-Current",
      id: useId(),
    },
    {
      title: "FullStack Web Developer",
      subTitle: "Freelance",
      description: [
        "Designed and developed a full-stack food ordering application for a restaurant, utilizing React for the web interface, React Native for the mobile app, and Laravel for the backend.",
        "Implemented real-time order tracking, and a user-friendly admin panel, resulting in a 40% increase in online orders.",
        "Optimized application performance, achieving a 50% reduction in load times and improving overall user satisfaction.",
      ],
      time: "2019-Current",
      id: useId(),
    },
    {
      title: "Software developer and Instructor",
      subTitle: "Xdezo Technologies",
      description: [
        "Developed a responsive, high-performance website for the agency, improving online presence and lead generation by 35%.",
        "Created comprehensive frontend development curriculum and delivered engaging lectures to over 20 students.",
        "Mentored freshers, conducting code reviews and pair programming sessions to enhance team skills and productivity.",
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
