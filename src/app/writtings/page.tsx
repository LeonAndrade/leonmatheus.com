import Link from "next/link";
import { getBlogPostList } from "@/helpers/file-handlers"

async function Blog() {

  const blogPosts = await getBlogPostList();

  return (
    <main>
      {
        blogPosts.map((post) => {
          return (
            <Link href={`/writtings/${post.slug}`} key={post.slug}>
              <div key={post.slug}>{post.slug}</div>
            </Link>
          )
        })
      }
      < Link href={"/writtings/"}>Back</Link>
    </main >
  );
}

export default Blog
