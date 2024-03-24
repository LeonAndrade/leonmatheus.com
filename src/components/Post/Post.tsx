import React from "react";

import PostToc from "@/components/PostToc";
import PostBody from "@/components/PostBody";
import styles from "./Post.module.css";

function Post({ title, content }: { title: string, content: string }) {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.toc}>
        <PostToc content={content} />
      </aside>
      <article className={styles.article}>
        <h1 className={styles.title}>{title}</h1>
        <PostBody content={content} />
      </article>
    </div>
  );
}

export default Post;

