import { useDocumentTitle } from "@uidotdev/usehooks";
import Link from "next/link";
import React from "react";

type blogcardprops = {
  meta: {
    [key: string]: any;
  };
  slug:string
};
const BlogCard = ({ meta,slug }: blogcardprops) => {
  return (
    <Link href={"/blogs/" + slug}>
      <div className="p-4 bg-primary my-2 rounded transition-all cursor-pointer w-full">
        <h2 className="font-semibold text-2xl">{meta.title}</h2>
        <div className="flex justify-between">
          <p className="font-Roboto-Slab text-text-secondary">
            {meta.description}
          </p>
          <p className="font-Roboto-Slab text-text-secondary">{meta.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
