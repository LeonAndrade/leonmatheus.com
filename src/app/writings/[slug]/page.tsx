import React from "react";

import { loadBlogPost } from "@/helpers/file-handlers";
import Post from "@/components/Post";
import SectionHeader from "@/components/SectionHeader";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = await loadBlogPost(params.slug);
  return {
    title: `${frontmatter.title} • leonmatheus.com`,
    description: frontmatter.abstract,
  }
}

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
