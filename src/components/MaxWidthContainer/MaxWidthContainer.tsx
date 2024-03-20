import React from "react";
import styles from "./MaxWidthContainer.module.css";

function MaxWidthContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper} >{children}</ div>
  )
};

export default MaxWidthContainer;
