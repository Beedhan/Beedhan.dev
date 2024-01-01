import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Style from "./project.module.css";
//https://gaudion.dev/blog/nextjs-mdx-blog

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("projects"));
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownfile = fs.readFileSync(
    path.join("projects", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownfile);
  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({ params }: any) {
  const project = getPost(params);
  return {
    title: project.frontMatter.title,
    description: project.frontMatter.description,
  };
}
const page = ({ params }: any) => {
  const props = getPost(params);
  return (
    <article className="prose prose-invert mt-5">
      <div className="flex gap-5 ">
        <h1 className="text-5xl m-0 text-tertiary">
          {props.frontMatter.title}
        </h1>
        <a
          className="underline mt-3"
          href={`https://${props.frontMatter.preview}.${process.env.HOSTED_URL}`}
          target="_blank"
        >
          Preview
        </a>
      </div>
      <p className="text-text-secondary">{props.frontMatter.description}</p>
      {props.frontMatter.collaborators && (
        <>
          <h2 className="m-0 p-0">Collaborator</h2>
          <ul className="flex list-none p-0 m-0 gap-2">
            {props.frontMatter.collaborators.map((collaborator: any) => (
              <li key={collaborator}>
                <a href={`https://github.com/${collaborator}`} target="_blank">
                  {collaborator}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
      <MDXRemote source={props.content} />
    </article>
  );
};

export default page;
