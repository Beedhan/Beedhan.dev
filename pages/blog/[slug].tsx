import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import BlogHead from "../../components/blog_post/BlogHead";
import { blog } from "../../utils/MyTypes";
import supabase from "../../utils/SupabaseClient";
import md from "markdown-it";

type Posts = {
  blog: blog;
  success: boolean;
};
interface Slugs extends ParsedUrlQuery {
  slug: string;
}

const BlogPost: NextPage<Posts> = ({ blog, success }) => {
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <BlogHead title={blog.title} date={blog.created_at} />
      <div dangerouslySetInnerHTML={{ __html: md().render(blog.body) }} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: blog, error } = await supabase.from("blogs").select(`*`);
  let paths: { params: { slug: string } }[] = [];
  if (blog) {
    paths = blog?.map(({ slug }) => ({
      params: {
        slug,
      },
    }));
  }
  return {
    paths, //indicates that no page needs be created at build time
    fallback: false, //indicates the type of fallback
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Slugs;
  const { data: blog, error } = await supabase
    .from("blogs")
    .select(`*`)
    .eq("slug", slug);
  return {
    props: {
      blog: blog && blog[0],
      success: blog ? true : false,
    },
  };
};
export default BlogPost;
