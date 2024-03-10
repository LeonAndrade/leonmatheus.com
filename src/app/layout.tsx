import type { Metadata } from "next";
import React from "react";

import StyledComponentsRegistry from "@/styles/lib/StyledComponentsRegistry";
import { ThemeFallback, ThemeScript } from "@/styles/theme/ssr";
import { GlobalProvider } from "@/providers/GlobalProvider";
import { RootStackingContext } from "@/components/RootStackingContext";
import themeConfig from "@/styles/theme";

export const metadata: Metadata = {
  title: "leonmatheus.com",
  description: "My personal website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
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
