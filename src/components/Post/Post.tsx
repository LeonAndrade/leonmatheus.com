import React from "react";

import PostToc from "@/components/PostToc";
import PostBody from "@/components/PostBody";
import styles from "./Post.module.css";

function Post({ title, content }: { title: string, content: string }) {
  return (
    <>
      <div className={styles.title_wrapper}>
        {title}
      </div>
      <div className={styles.article_wrapper}>
        <aside className={styles.toc}>
          <PostToc content={content} />
        </aside>
        <article className={styles.article}>
          <PostBody content={content} />
        </article>
      </div>
    </>
  );
}

export default Post;

