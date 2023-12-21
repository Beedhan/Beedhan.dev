import React from "react";
import BlogCard from "@/components/Blog/BlogCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Beedhan",
  description: "Blogs page",
};

const BlogPage = () => {
  const blogDir = "blogs";
  const files = fs.readdirSync(path.join(blogDir));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return (
    <>
      {blogs.length > 0 && (
        <div>
          <h1 className="text-6xl font-bold mb-4">Blogs</h1>
          {blogs.map((blog) => (
            <BlogCard meta={blog.meta} slug={blog.slug} key={blog.slug} />
          ))}
        </div>
      )}
    </>
  );
};

export default BlogPage;
