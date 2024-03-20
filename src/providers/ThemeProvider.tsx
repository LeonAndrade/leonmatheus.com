"use client"

import React from "react"

import themeConfig from "@/styles/theme";

type StringOrUndefined = string | undefined;

interface ThemeContextType {
  colorMode: StringOrUndefined;
  setColorMode: (newValue: any) => void;
}

export const ThemeContext = React.createContext<ThemeContextType>(
  undefined as any
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, rawSetColorMode] = React.useState<StringOrUndefined>();

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      themeConfig.INITIAL_COLOR_MODE_CSS_PROP
    );
    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue: string) {
      const root = window.document.documentElement;
      localStorage.setItem(themeConfig.COLOR_MODE_KEY, newValue);
      Object.entries(themeConfig.COLORS).forEach(
        ([name, colorByTheme]: [string, { [idx: string]: string }]) => {
          const cssVarName = `--${name}`;
          root.style.setProperty(cssVarName, colorByTheme[newValue]);
        }
      );
      rawSetColorMode(newValue);
    }
    return { colorMode, setColorMode };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
