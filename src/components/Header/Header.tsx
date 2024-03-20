import React from "react";
import Link from "next/link";

import styles from "./Header.module.css";

import MaxWidthContainer from "@/components/MaxWidthContainer";

function Header() {
  return (
    <header className={styles.header}>
      <MaxWidthContainer>
        <nav>
          <Link className={styles.link} href="/">Home</Link>
          <Link className={styles.link} href="/writtings">Writtings</Link>
          <Link className={styles.link} href="/about">About</Link>
        </nav>
      </MaxWidthContainer>
    </header>
  )
}

export default Header;
