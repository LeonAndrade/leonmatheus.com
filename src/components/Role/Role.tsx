import React from "react";

import styles from "./Role.module.css";

type RoleProps = {
  role: string;
  start: string;
  end: string;
};

function Role(props: RoleProps) {
  return (
    <div className={styles.wrapper}>
      <h3>{props.role}</h3>
      <div>
        {props.start} - {props.end}
      </div>
    </div>
  );
}

export default Role;
