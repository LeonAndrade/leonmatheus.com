import React from "react";
import Link from "next/link";

import { IconRocket, IconCookie, IconLogo } from "@/components/Icon";
import styles from "./SectionHeader.module.css";
import ThemeToggle from "@/components/ThemeToggle";

type SectionProps = {
  url: string;
  name: string;
  icon: React.ReactNode;
};

const sections: SectionProps[] = [
  { url: "/", name: "Leon", icon: <IconLogo height={36} width={36} /> },
  { url: "/experience", name: "Carreer", icon: <IconRocket /> },
  { url: "/writings", name: "Writings", icon: <IconCookie /> },
];

function SectionsHeader(props: SectionProps) {
  return (
    <Link className={styles.section_item} href={`${props.url}`}>
      <div className={styles.section_icon}>{props.icon}</div>
      <div className={styles.section_name}>{props.name}</div>
    </Link>
  );
}

function SectionHeader() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.intro}>
        {sections.map((sectionProps: SectionProps) => (
          <SectionsHeader key={sectionProps.name} {...sectionProps} />
        ))}
        <ThemeToggle />
      </nav>
    </div>
  );
}

export default SectionHeader;
