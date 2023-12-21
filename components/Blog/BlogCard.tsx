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
        <div>
          <h2 className="font-semibold text-2xl">{meta.title}</h2>
          <p className="font-Roboto-Slab text-text-secondary">
            {meta.description}
          </p>
        </div>
        <p className="font-Roboto-Slab text-text-secondary">{meta.date}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
