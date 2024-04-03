"use client"

import React from "react";

import { ThemeContext } from "@/providers/ThemeProvider";
import {
  IconSun,
  IconMoon
} from "@/components/Icon";
import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const switchTo = colorMode === "dark" ? "light" : "dark";

  return (
    <button
      className={styles.theme}
      onClick={() => setColorMode(switchTo)}>
      {colorMode === "dark" ? <IconMoon /> : <IconSun />}
    </button>
  );
}

export default ThemeToggle;
