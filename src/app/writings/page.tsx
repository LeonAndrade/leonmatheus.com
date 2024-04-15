import { getBlogPostList } from "@/helpers/file-handlers"

import PostCard from "@/components/PostCard";
import styles from "./writings.module.css";

async function Blog() {

  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
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
    </div>
  );
}

export default Blog
