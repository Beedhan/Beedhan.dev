import { FunctionComponent } from "react";
import style from "./BlogCard.module.css";
import { blog } from "../../utils/MyTypes";
import Link from "next/link";

type singleBlog = {
  blog: blog;
};
const BlogCard: FunctionComponent<singleBlog> = ({ blog }) => {
  return (
    <Link href={`blog/${blog.slug}`} passHref>
      <div className={style.blogCard}>
        <div className={style.cardTop}>
          <p>{blog.tag}</p>
          <p>{blog?.created_at?.split("T")[0]}</p>
        </div>
        <h1>{blog.title}</h1>
        <h4>{blog.description}</h4>
      </div>
    </Link>
  );
};

export default BlogCard;
