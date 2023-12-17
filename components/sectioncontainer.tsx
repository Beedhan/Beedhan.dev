import React from "react";

type sectionprops = {
  children: React.ReactNode;
  title: string;
};
const Sectioncontainer = ({ children, title }: sectionprops) => {
  return (
    <section className="my-14">
      <h2 className="font-bold text-5xl">{title}</h2>
      {children}
    </section>
  );
};

export default Sectioncontainer;
