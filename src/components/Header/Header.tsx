import React from "react";
import Link from "next/link";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.header_link}>
        <div className={styles.name}>Leon Andrade Matheus</div>
      </Link>
    </header>
  )
}

export default Header;
