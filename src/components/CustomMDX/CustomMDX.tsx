import React from "react";
import clsx from "clsx";
import styles from "./CustomMDX.module.css";

type Children = { children: React.ReactNode };

export function P({ children }: Children) {
  return (
    <p className={styles.p}>{children}</p>
  )
}

export function H1({ children }: Children) {
  return (
    <h1 className={styles.h1}>{children}</h1>
  )
}

export function H2({ children }: Children) {
  const content = children?.toString().toLowerCase().replaceAll(" ", "_");

  return (
    <h2 className={clsx(styles.h2, styles.heading)}>
      <a
        id={content}
        href={`#${content}`}
        className={styles.header_link}
      >
        {children}
      </a>
    </h2>
  )
}

export function H3({ children }: Children) {
  const content = children?.toString().toLowerCase().replaceAll(" ", "_");

  return (
    <h3 className={clsx(styles.h3, styles.heading)}>
      <a
        id={content}
        href={`#${content}`}
        className={styles.header_link}
      >
        {children}
      </a>
    </h3>
  )
}

export function Code({ children }: Children) {
  return (
    <code className={styles.code}>{children}</code>
  )
}

export function Pre({ children }: Children) {
  return (
    <pre className={styles.pre}>{children}</pre>
  )
}

export function Blockquote({ children }: Children) {
  return (
    <blockquote className={styles.blockquote}>{children}</blockquote>
  )
}
