import Link from "next/link";
import React from "react";

type sectionprops = {
  children: React.ReactNode;
  title: string;
  slug?: string;
};
const Sectioncontainer = ({ children, title, slug }: sectionprops) => {
  return (
    <section className="my-14" id={title.toLowerCase()}>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl my-2 md:text-4xl">{title}</h2>
        {slug && <Link href={slug}>View</Link>}
      </div>
      {children}
    </section>
  );
};

export default Sectioncontainer;
