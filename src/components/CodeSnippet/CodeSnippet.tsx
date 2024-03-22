import React from "react";
import { Code } from "bright";

import styles from "./CodeSnippet.module.css";
import { myTheme } from "./customTheme";

function CodeSnippet(props) {
  return (
    <Code
      className={styles.wrapper}
      lineNumbers
      theme={myTheme}
      {...props}
    />
  );
}


export default CodeSnippet;
