import { getBlogPostList } from "@/helpers/file-handlers"

import PostCard from "@/components/PostCard";

async function Blog() {

  const blogPosts = await getBlogPostList();

  return (
    <main>
      {
        blogPosts.map(({ slug, title, abstract, publishedOn }) => {
          return (
            <PostCard
              key={slug}
              slug={slug}
              title={title}
              abstract={abstract}
              publishedOn={publishedOn}
            />
          )
        })
      }
    </main >
  );
}

export default Blog
