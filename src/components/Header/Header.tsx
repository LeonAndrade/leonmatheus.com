import React from "react";
import Link from "next/link";

import MaxWidthContainer from "@/components/MaxWidthContainer";
import ThemeToggle from "@/components/ThemeToggle";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <MaxWidthContainer>
        <div className={styles.wrapper}>
          <nav className={styles.nav}>
            <Link className={styles.link} href="/">Home</Link>
            <Link className={styles.link} href="/writings">Writings</Link>
            <Link className={styles.link} href="/about">About</Link>
          </nav>
          <ThemeToggle />
        </div>
      </MaxWidthContainer>
    </header>
  )
}

export default Header;
