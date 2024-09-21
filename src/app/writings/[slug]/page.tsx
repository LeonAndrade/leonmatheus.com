import React from "react";

import { loadBlogPost } from "@/helpers/file-handlers";
import Post from "@/components/Post";

async function PostPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = await loadBlogPost(params.slug);

  return (
    <>
      <Post
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        abstract={frontmatter.abstract}
        content={content}
      />
    </>
  );
}

export default PostPage;
