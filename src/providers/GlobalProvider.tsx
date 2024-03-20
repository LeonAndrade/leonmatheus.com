"use client"

import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </>
  );
};
