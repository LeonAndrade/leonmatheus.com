import React from "react";

import MaxWidthContainer from "@/components/MaxWidthContainer";
import ThemeToggle from "@/components/ThemeToggle";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <MaxWidthContainer>
        <div className={styles.wrapper}>
          <div>Hi, I'm <strong>Leon</strong>! Welcome to my Knowledge Garden.</div>
          <ThemeToggle />
        </div>
      </MaxWidthContainer>
    </header>
  )
}

export default Header;
