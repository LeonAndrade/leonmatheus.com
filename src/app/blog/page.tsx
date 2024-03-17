import Link from "next/link";

export default function Blog() {
  return (
    <main>
      This is the blog page
      <Link href={"/blog/"}>Back</Link>
      <Link href={"/blog/post-1"}>First Post</Link>
      <Link href={"/blog/post-2"}>Second Post</Link>
      <Link href={"/blog/post-3"}>Third Post</Link>
    </main>);
}

