import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

//https://gaudion.dev/blog/nextjs-mdx-blog

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownfile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownfile);
  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({params}:any){
    const blog = getPost(params);
    return {
        title:blog.frontMatter.title,
        description:blog.frontMatter.description,
    }
}

const page = ({ params }: any) => {
  const props = getPost(params);
  return (
    <article className="prose dark:prose-invert">
      <h1 className="text-4xl font-bold mb-10">{props.frontMatter.title}</h1>
      <MDXRemote  source={props.content} />
    </article>
  );
};

export default page;
