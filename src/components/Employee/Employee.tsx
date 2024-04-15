import React from "react";

import styles from "./Employee.module.css"

function Employee({ children, company }) {
  return (
    <div className={styles.wrapper}>
      <h2>{company}</h2>
      {children}
    </div>
  );
}

export default Employee;
