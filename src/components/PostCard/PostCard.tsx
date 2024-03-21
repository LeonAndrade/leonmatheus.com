import Link from "next/link";
import styles from "./PostCard.module.css";
import { format } from "date-fns";
import MaxWidthContainer from "../MaxWidthContainer";

function PostCard({ slug, title, abstract, publishedOn }) {

  const parsedDate = format(publishedOn, "yyyy-MM-dd");
  return (
    <MaxWidthContainer>
      <div className={styles.card}>
        <Link href={`/writtings/${slug}`} className={styles.link}>
          <h2>{title}</h2>
          <section className={styles.abstract}>
            {abstract}
          </section>
          <div>{parsedDate}</div>
        </Link>
      </div>
    </MaxWidthContainer>
  )
}

export default PostCard
