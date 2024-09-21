import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { allFonts } from "@/helpers/fonts";
import themeConfig from "@/styles/theme";
import "@/styles/global.css";
import styles from "@/styles/layout.module.css";
import { ThemeFallback, ThemeScript } from "@/styles/ssr";
import { GlobalProvider } from "@/providers/GlobalProvider";
import { IconLinkedinLogo, IconLogoGithub, IconCookie, IconLogo } from "@/components/Icon";
import ThemeToggle from "@/components/ThemeToggle";


const metadata: Metadata = {
  title: "leonmatheus.com",
  description: "My personal website.",
  icons: {
    icon: "/leon_logo.svg",
  }
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={allFonts}
    >

      <head>
        <ThemeScript config={themeConfig} />
        <ThemeFallback config={themeConfig} />
      </head>

      <body>
        <GlobalProvider>
          <div className={styles.root_stacking_context}>
            <div className={styles.max_width_container}>

              <nav className={styles.header}>
                <Link className={styles.home_icon} href={"/"}>
                  <div className={styles.section_icon}><IconLogo height={54} width={54} /></div>
                </Link>
                <Link className={styles.section_item} href={"/writings"}>
                  <div className={styles.section_icon}><IconCookie /></div>
                  <div className={styles.section_name}>Writings</div>
                </Link>
              </nav>

              <main className={styles.main}>
                {children}
              </main>

              <footer className={styles.footer}>
                <ThemeToggle />
                <div className={styles.social}>
                  <Link href="https://www.linkedin.com/in/leon-matheus/">
                    <IconLinkedinLogo />
                  </Link>
                  <Link href="https://github.com/LeonAndrade">
                    <IconLogoGithub />
                  </Link>
                </div>
              </footer>

            </div>
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}

export default RootLayout;
export { metadata };
