import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import style from "../../components/admin/EditorPage.module.css";
import supabase from "../../utils/SupabaseClient";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";

const MDEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

const PostBlog: NextPage = () => {
  const [value, setValue] = useState<string>("**Hello world!!!**");
  const [title, setTitle] = useState("Title");
  const [tag, setTag] = useState("Tag");
  const [description, setDescription] = useState("Description");

  const router = useRouter();
  const mdParser = new MarkdownIt(/* Markdown-it options */);

  useEffect(() => {
    const user = supabase.auth.user();
    if (!user) {
      router.push("/");
    }
  }, []);

  const handleBlogPost = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.from("blogs").insert([
      {
        title,
        body: value,
        slug: title.toLowerCase().replaceAll(" ", "-"),
        tag,
        description,
      },
    ]);
    error === null
      ? toast.success("Blog posted", {
          position: "top-right",
        })
      : toast.error(`${supabase.auth.user()?.email} ${error.message}`, {
          position: "top-right",
        });
    console.log(data, error);
  };

  const handleMd = ({ html, text }: { html: string; text: string }) => {
    setValue(text);
  };
  return (
    <div className={style.container}>
      <form className={style.inputContainer}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          required
        />
        <MDEditor
          onChange={handleMd}
          style={{ height: "300px" }}
          value={value}
          renderHTML={(text: string) => mdParser.render(text)}
        />
        <button
          type="submit"
          className={style.postButton}
          onClick={handleBlogPost}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostBlog;
