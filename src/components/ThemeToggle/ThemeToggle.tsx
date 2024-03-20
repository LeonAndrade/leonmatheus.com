"use client"

import React from "react";

import { ThemeContext } from "@/providers/ThemeProvider";
import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  return (
    <>
      <button className={styles.button} onClick={(e) => setColorMode("dark")}>
        Escuro
      </button>
      <button className={styles.button} onClick={(e) => setColorMode("light")}>
        Claro
      </button>
    </>
  );
}

export default ThemeToggle;
