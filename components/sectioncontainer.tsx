import Link from "next/link";
import React from "react";

type sectionprops = {
  children?: React.ReactNode;
  title: string;
  slug?: string;
};
const Sectioncontainer = ({ children, title, slug }: sectionprops) => {
  return (
    <>
      {children && (
        <section className="my-5 lg:my-10" id={title.toLowerCase()}>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl my-2  lg:text-3xl">{title}</h2>
            {slug && <Link href={slug}>View</Link>}
          </div>
          {children}
        </section>
      )}
    </>
  );
};

export default Sectioncontainer;
