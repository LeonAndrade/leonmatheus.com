import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import { loadBlogPost } from "@/helpers/file-handlers";


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = await loadBlogPost(params.slug);
  return {
    title: `${frontmatter.title} • leonmatheus.com`,
    description: frontmatter.abstract,
  }
}

async function Post({ params }: { params: { slug: string } }) {

  const { frontmatter, content } = await loadBlogPost(params.slug);

  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <div>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export default Post;
