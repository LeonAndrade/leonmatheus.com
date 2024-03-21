import React from "react";
import { Code } from "bright";
import styles from "./CodeSnippet.module.css";

function CodeSnippet(props) {
  return (
    <Code
      {...props}
      className={styles.wrapper}
    />
  );
}


export default CodeSnippet;
