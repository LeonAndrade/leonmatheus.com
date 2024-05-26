import React from "react";
import clsx from "clsx";
import styles from "./CustomMDX.module.css";

type Children = { children: React.ReactNode };

export function P(props: any) {
  return <p className={styles.p}>{props.children}</p>;
}

export function H1(props: any) {
  return <h1 className={styles.h1}>{props.children}</h1>;
}

export function H2(props: any) {
  const content = props.children?.toString().toLowerCase().replaceAll(" ", "_");

  return (
    <h2 className={clsx(styles.h2, styles.heading)}>
      <a id={content} href={`#${content}`} className={styles.header_link}>
        {props.children}
      </a>
    </h2>
  );
}

export function H3(props: any) {
  const content = props.children?.toString().toLowerCase().replaceAll(" ", "_");

  return (
    <h3 className={clsx(styles.h3, styles.heading)}>
      <a id={content} href={`#${content}`} className={styles.header_link}>
        {props.children}
      </a>
    </h3>
  );
}

export function Code(props: any) {
  return <code className={styles.code}>{props.children}</code>;
}

export function Blockquote(props: any) {
  return (
    <blockquote className={styles.blockquote}>{props.children}</blockquote>
  );
}
