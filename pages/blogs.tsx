import { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import BlogCard from "../components/blog/BlogCard";
import { blog } from "../utils/MyTypes";
import supabase from "../utils/SupabaseClient";

type Posts = {
  blogs: blog[];
};
const Blogs: NextPage<Posts> = ({ blogs }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {blogs.map((blog) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: blogs, error } = await supabase.from("blogs").select(`*`);
  return {
    props: {
      blogs,
    },
  };
};
export default Blogs;
