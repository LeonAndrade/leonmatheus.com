import Link from "next/link";
import styles from "./PostCard.module.css";
import { format } from "date-fns";

type PostCardProps = {
  slug: string;
  title: string;
  "abstract": string;
  publishedOn: string;
}

function PostCard({ slug, title, abstract, publishedOn }: PostCardProps) {

  const parsedDate = format(publishedOn, "yyyy-MM-dd");
  return (
    <div className={styles.card}>
      <Link href={`/writings/${slug}`} className={styles.link}>
        <h2>{title}</h2>
        <section className={styles.abstract}>
          {abstract}
        </section>
        <div>{parsedDate}</div>
      </Link>
    </div>
  )
}

export default PostCard
