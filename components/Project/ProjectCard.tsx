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
        <h2 className="font-semibold text-xl md:text-2xl">{meta.title}</h2>
        <div className="flex justify-between">
          <p className="font-Roboto-Slab text-text-secondary text-sm md:text-lg">
            {meta.description}
          </p>
        </div>
        <div className="mt-2">
          {meta.technology.map((tech: string) => (
            <span
              className="bg-secondary text-text-secondary font-semibold text-sm px-2 py-1 rounded-full mr-1 hover:bg-tertiary hover:text-primary"
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
