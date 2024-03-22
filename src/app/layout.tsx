import React from "react";
import type { Metadata } from "next";
import {
  Catamaran,
  Fira_Code
} from "next/font/google";
import { clsx } from "clsx";

import { ThemeFallback, ThemeScript } from "@/styles/ssr";
import { GlobalProvider } from "@/providers/GlobalProvider";
import RootStackingContext from "@/components/RootStackingContext";
import themeConfig from "@/styles/theme";
import "./global.css";


const catamaran = Catamaran({
  subsets: ["latin"],
  variable: "--font-text",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "leonmatheus.com",
  description: "My personal website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(catamaran.variable, firaCode.variable)}
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
