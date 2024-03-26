import Link from "next/link";

import styles from "./GlobalSidebar.module.css";

function GlobalSidebar() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/writings">Writings</Link>
        <Link className={styles.link} href="/about">About</Link>
      </nav>
    </div>
  )
}

export default GlobalSidebar;
