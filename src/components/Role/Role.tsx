import React from "react";

import styles from "./Role.module.css"

function Role({ role, start, end }) {
  return (
    <div className={styles.wrapper}>
      <h3>{role}</h3>
      <div>{start} - {end}</div>
    </div>
  )
}

export default Role;

