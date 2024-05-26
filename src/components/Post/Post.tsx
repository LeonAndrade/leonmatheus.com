import React from "react";

import PostToc from "@/components/PostToc";
import PostBody from "@/components/PostBody";
import PostTitle from "@/components/PostTitle";

import styles from "./Post.module.css";

type PostProps = {
  title: string,
  abstract: string,
  subtitle: string,
  content: string
}

function Post({ title, subtitle, abstract, content }: PostProps) {
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

