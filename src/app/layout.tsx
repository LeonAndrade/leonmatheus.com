import React from "react";
import type { Metadata } from "next";

import { allFonts } from "@/helpers/fonts";
import themeConfig from "@/styles/theme";
import { ThemeFallback, ThemeScript } from "@/styles/ssr";
import { GlobalProvider } from "@/providers/GlobalProvider";
import RootStackingContext from "@/components/RootStackingContext";
import Main from "@/components/Main";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import ContentContainer from "@/components/ContentContainer";
import SectionHeader from "@/components/SectionHeader";
import styles from "./layout.module.css";
import "./global.css";

export const metadata: Metadata = {
  title: "leonmatheus.com",
  description: "My personal website.",
  icons: {
    icon: "/leon_logo.svg",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
          <div className={styles.wrapper}>
            <div className={styles.layout_wrapper}>

              <RootStackingContext>
                <Main>
                  <MaxWidthContainer>
                    <ContentContainer>
                      < SectionHeader />
                      {children}
                    </ContentContainer>
                  </MaxWidthContainer>
                </Main>
              </RootStackingContext>

            </div>
          </div>
        </GlobalProvider>
      </body>

    </html>
  );
}

