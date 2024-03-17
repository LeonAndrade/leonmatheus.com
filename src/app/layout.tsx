import React from "react";
import type { Metadata } from "next";

import themeConfig from "@/styles/theme";
import { inconsolata } from "@/styles/fonts";
import { ThemeFallback, ThemeScript } from "@/styles/ssr";
import StyledComponentsRegistry from "@/styles/StyledComponentsRegistry";
import { GlobalProvider } from "@/providers/GlobalProvider";
import { RootStackingContext } from "@/ui/app/RootStackingContext";
import { Header } from "@/ui/app/Header";
import { Footer } from "@/ui/app/Footer";
import { Main } from "@/ui/app/Main";

export const metadata: Metadata = {
  title: "leonmatheus.com",
  description: "My personal website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={inconsolata.variable}
    >
      <head>
        <ThemeScript config={themeConfig} />
        <ThemeFallback config={themeConfig} />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalProvider>
            <RootStackingContext>
              {children}
            </RootStackingContext>
          </GlobalProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
