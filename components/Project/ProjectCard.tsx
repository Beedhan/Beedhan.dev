import { useDocumentTitle } from "@uidotdev/usehooks";
import Link from "next/link";
import React from "react";

type projectcardprops = {
  meta: {
    [key: string]: any;
  };
  slug: string;
};
const ProjectCard = ({ meta, slug }: projectcardprops) => {
  return (
    <Link href={"/projects/" + slug}>
      <div className="p-4 bg-primary my-2 rounded transition-all cursor-pointer w-full">
        <h2 className="font-semibold text-lg lg:text-2xl md:text-xl">
          {meta.title}
        </h2>
        <div className="flex justify-between">
          <p className="font-Roboto-Slab text-text-secondary text-sm lg:text-md">
            {meta.description}
          </p>
        </div>
        <div className="mt-2 flex gap-1 flex-wrap">
          {meta.technology.map((tech: string) => (
            <span
              className="bg-secondary text-text-secondary font-semibold text-sm px-2 py-1 rounded-full hover:bg-tertiary hover:text-primary "
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
