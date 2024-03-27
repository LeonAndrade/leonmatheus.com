import Link from "next/link";

import styles from "./GlobalSidebar.module.css";
import {
  IconPencil1,
  IconStar,
  IconCode,
  IconGear,
  IconDisc,
  IconRocket,
  IconEyeOpen,
  IconKeyboard,
  IconInfo,
  IconCookie,
  IconHobbyKnife,

} from "@/components/Icon";

type SidebarItemProps = {
  href: any;
  name: any;
  icon: any;
  component: any;
}

const sidebarContent = [
  { href: "/", name: "Home", icon: <IconStar /> },
  { href: "/about", name: "About", icon: <IconCookie /> },
  { href: "/experience", name: "Experience", icon: <IconKeyboard /> },
  { href: "/projects", name: "Projects", icon: <IconRocket /> },
  { href: "/writings", name: "Writings", icon: <IconPencil1 /> },
]

function SidebarItem({ href, name, icon }: SidebarItemProps) {
  return (
    <div className={styles.sidebar_item_wrapper}>
      <Link className={styles.nav_link} href={href}>
        <div className={styles.icon}>{icon}</div>
      </Link>
      <Link className={styles.nav_link} href={href}>
        <div className={styles.item_name}>{name}</div>
      </Link>
    </div>
  )
}

function GlobalSidebar() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        {
          sidebarContent.map((s) => (
            <SidebarItem
              href={s.href}
              name={s.name}
              icon={s.icon}
              component={null}
            />)
          )
        }
      </nav>
    </div>
  )
}

export default GlobalSidebar;
