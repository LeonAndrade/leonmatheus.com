"use client"

import React, { PropsWithChildren } from "react";

import { GlobalStyles } from "@/styles/GlobalStyles";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
};
