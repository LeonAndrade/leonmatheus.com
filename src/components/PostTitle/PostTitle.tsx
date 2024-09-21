import styles from "./PostTitle.module.css";

type PostTitleProps = {
  title: string;
  subtitle: string;
  abstract: string;
}

function PostTitle({ title, subtitle, abstract }: PostTitleProps) {
  return (
    <div className={styles.title_wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.abstract}>{abstract}</div>
    </div>
  )
}

export default PostTitle;
