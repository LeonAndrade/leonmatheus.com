import Link from "next/link";

import styles from "./GlobalSidebar.module.css";
import {
  IconPencil1,
  IconRocket,
  IconKeyboard,
  IconCookie,
  IconLogo
} from "@/components/Icon";
import ThemeToggle from "@/components/ThemeToggle";

type SidebarItemProps = {
  href: any;
  name: any;
  icon: any;
}

const sidebarContent: SidebarItemProps[] = [
  { href: "/", name: "Home", icon: <IconLogo height={36} width={36} /> },
  { href: "/about", name: "About", icon: <IconCookie /> },
  { href: "/experience", name: "Experience", icon: <IconKeyboard /> },
  { href: "/projects", name: "Projects", icon: <IconRocket /> },
  { href: "/writings", name: "Writings", icon: <IconPencil1 /> },
]

const sidebarItemMapper = (s: SidebarItemProps) => (
  <div className={styles.sidebar_item_wrapper}>
    <Link className={styles.nav_link} href={s.href}>
      <div className={styles.icon}>{s.icon}</div>
    </Link>
    <Link className={styles.nav_link} href={s.href}>
      <div className={styles.item_name}>{s.name}</div>
    </Link>
  </div>
);

export const ThemeItem = () => (
  <div className={styles.sidebar_item_wrapper}>
    <div className={styles.nav_link}>
      <ThemeToggle />
    </div>
    <div className={styles.nav_link}>
      <div className={styles.item_name}>Theme</div>
    </div>
  </div>
)


function GlobalSidebar() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        {sidebarContent.map(sidebarItemMapper)}
        <ThemeItem />
      </nav>
    </div>
  )
}

export default GlobalSidebar;
