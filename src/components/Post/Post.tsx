import React from "react";

import PostToc from "@/components/PostToc";
import PostBody from "@/components/PostBody";
import PostTitle from "@/components/PostTitle";

import styles from "./Post.module.css";

function Post({ title, subtitle, abstract, content }: { title: string, content: string }) {
  return (
    <div className={styles.post_wrapper}>
      <PostTitle title={title} abstract={abstract} subtitle={subtitle} />

      <div className={styles.article_wrapper}>
        <aside className={styles.toc}>
          <PostToc content={content} />
        </aside>

        <article className={styles.article}>
          <PostBody content={content} />
        </article>
      </div>

    </div>
  );
}

export default Post;

