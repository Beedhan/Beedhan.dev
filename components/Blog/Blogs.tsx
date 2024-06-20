import React from "react";
import Sectioncontainer from "../sectioncontainer";
import BlogCard from "./BlogCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Blogs = () => {
  const blogDir = "blogs";
  const files = fs.readdirSync(path.join(blogDir));
  const blogs = files
    .map((filename) => {
      const fileContent = fs.readFileSync(
        path.join(blogDir, filename),
        "utf-8"
      );
      const { data: frontMatter } = matter(fileContent);
      return {
        meta: frontMatter,
        slug: filename.replace(".mdx", ""),
      };
    })
    .slice(0, 5);

  return (
    <Sectioncontainer title="Blogs" slug="blogs">
      {blogs.length > 0
        ? blogs.map((blog) => (
            <BlogCard key={blog.slug} slug={blog.slug} meta={blog.meta} />
          ))
        : null}
    </Sectioncontainer>
  );
};

export default Blogs;
