import { NextPage } from "next";
import style from "./blog.module.css";
type Props = {
  title: String;
  date: String;
};
const BlogHead: NextPage<Props> = ({ title, date }) => {
  return (
    <div className={style.header}>
      <p>{date?.split("T")[0]}</p>
      <header className={style.title}>{title}</header>
    </div>
  );
};
export default BlogHead;
