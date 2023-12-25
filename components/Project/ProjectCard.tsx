import { useDocumentTitle } from "@uidotdev/usehooks";
import Link from "next/link";
import React from "react";

type projectcardprops = {
  meta: {
    [key: string]: any;
  };
  slug:string
};
const ProjectCard = ({ meta,slug }: projectcardprops) => {
  return (
    <Link href={"/projects/" + slug}>
      <div className="p-4 bg-primary my-2 rounded transition-all cursor-pointer w-full">
        <h2 className="font-semibold text-xl md:text-2xl">{meta.title}</h2>
        <div className="flex justify-between">
          <p className="font-Roboto-Slab text-text-secondary text-sm md:text-lg">
            {meta.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
