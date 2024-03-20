import React from "react";

import MaxWidthContainer from "@/components/MaxWidthContainer";
import ThemeToggle from "@/components/ThemeToggle";
import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <MaxWidthContainer>
        <ThemeToggle />
      </MaxWidthContainer>
    </footer>
  )
}

export default Footer
