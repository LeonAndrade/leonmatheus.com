import React from "react";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";

import { ThemeFallback, ThemeScript } from "@/styles/ssr";
import { GlobalProvider } from "@/providers/GlobalProvider";
import RootStackingContext from "@/components/RootStackingContext";
import themeConfig from "@/styles/theme";
import "./global.css";


const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

export const metadata: Metadata = {
  title: "leonmatheus.com",
  description: "My personal website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={inconsolata.variable}
    >
      <head>
        <ThemeScript config={themeConfig} />
        <ThemeFallback config={themeConfig} />
      </head>
      <body>
        <GlobalProvider>
          <RootStackingContext>
            {children}
          </RootStackingContext>
        </GlobalProvider>
      </body>
    </html>
  );
}
