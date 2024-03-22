import React from "react";
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
  return (
    <h2 className={styles.h2}>{children}</h2>
  )
}

export function H3({ children }: Children) {
  return (
    <h3 className={styles.h3}>{children}</h3>
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
