import React from "react"
import styles from "./ContentContainer.module.css";

function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}

export default ContentContainer;
