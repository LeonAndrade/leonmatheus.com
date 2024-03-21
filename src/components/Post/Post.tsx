import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import MaxWidthContainer from "@/components/MaxWidthContainer";
import CUSTOM_MDX_COMPONENTS from "@/helpers/mdx-components";
import styles from "./Post.module.css";

function Post({ title, content }: { title: string, content: string }) {
  return (
    <MaxWidthContainer>
      <article className={styles.article}>
        <h1 className={styles.title}>{title}</h1>
        <section>
          <MDXRemote
            source={content}
            components={CUSTOM_MDX_COMPONENTS}
          />
        </section>
      </article>
    </MaxWidthContainer>
  );
}

export default Post;

