import React from "react";
import type { Metadata } from "next";

import { ThemeFallback, ThemeScript } from "@/styles/ssr";
import { GlobalProvider } from "@/providers/GlobalProvider";
import GlobalLayout from "@/components/GlobalLayout";
import { allFonts } from "@/helpers/fonts";
import themeConfig from "@/styles/theme";
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
          <GlobalLayout>
            {children}
          </GlobalLayout>
        </GlobalProvider>
      </body>
    </html>
  );
}
