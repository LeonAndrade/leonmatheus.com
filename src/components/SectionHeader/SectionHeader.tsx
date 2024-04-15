import React from "react";
import Link from "next/link";

import {
  IconRocket,
  IconCookie,
  IconLogo
} from "@/components/Icon";
import styles from "./SectionHeader.module.css";
import ThemeToggle from "@/components/ThemeToggle";

const sections = [
  { url: "/", name: "Leon", icon: <IconLogo height={36} width={36} /> },
  { url: "/experience", name: "Carreer", icon: <IconRocket /> },
  { url: "/writings", name: "Writings", icon: <IconCookie /> },
]

function SectionsHeader({ section }) {
  return (
    <Link className={styles.section_item} href={`${section.url}`}>
      <div className={styles.section_icon}>{section.icon}</div>
      <div className={styles.section_name}>{section.name}</div>
    </Link>
  )
}

function SectionHeader() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.intro}>
        {sections.map(s => (<SectionsHeader key={s} section={s} />))}
        <ThemeToggle />
      </nav>
    </div>
  )
}

export default SectionHeader;
