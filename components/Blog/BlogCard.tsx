import { useDocumentTitle } from "@uidotdev/usehooks";
import Link from "next/link";
import React from "react";

type blogcardprops = {
  meta: {
    [key: string]: any;
  };
  slug: string;
};
const BlogCard = ({ meta, slug }: blogcardprops) => {
  return (
    <Link href={"/blogs/" + slug}>
      <div className="p-4 flex justify-between bg-primary my-2 rounded transition-all cursor-pointer w-full">
        <div className="w-3/5">
          <h2 className="font-semibold text-xl md:text-2xl">{meta.title}</h2>
          <p className="font-Roboto-Slab text-text-secondary text-sm md:text-lg">
            {meta.description}
          </p>
        </div>
        <p className="font-Roboto-Slab text-text-secondary text-md md:text-lg ">{meta.date}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
