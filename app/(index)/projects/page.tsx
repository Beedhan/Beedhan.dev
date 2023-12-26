import React from "react";
import BlogCard from "@/components/Blog/BlogCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import ProjectCard from "@/components/Project/ProjectCard";

export const metadata:Metadata = {
    title:"Projects - Beedhan",
    description:"Projects page",
  }

const ProjectsPage = () => {
  const projectDir = "projects";
  const files = fs.readdirSync(path.join(projectDir));
  const projects = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(projectDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  }).slice(0,5);
  return (
    <div>
      <h1 className="text-6xl font-bold mb-4">Projects</h1>
      {projects.map((project) => (
        <ProjectCard meta={project.meta} slug={project.slug} key={project.slug} />
      ))}
    </div>
  );
};

export default ProjectsPage;
