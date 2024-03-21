import React from "react";
import Link from "next/link";

import { loadBlogPost } from "@/helpers/file-handlers";
import Post from "@/components/Post";

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
      < Link href={"/writtings/"}>Back</Link>
      <Post
        title={frontmatter.title}
        content={content}
      />
    </>
  );
}

export default PostPage;
