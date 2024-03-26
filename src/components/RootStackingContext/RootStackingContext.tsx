import React from "react";

import styles from "./RootStackingContext.module.css";

function RootStackingContext({ children }: { children: React.ReactNode; }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

export default RootStackingContext;
