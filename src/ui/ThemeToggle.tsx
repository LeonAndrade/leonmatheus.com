import React from "react";
import styled from "styled-components";

import { ThemeContext } from "@/providers/ThemeProvider";

const ThemeToggleButton = styled.button`
  margin: 1.5rem;
  width: 8rem;
  height: 2rem;
`;

export function ThemeToggle() {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  return (
    <>
      <ThemeToggleButton onClick={(e) => setColorMode("dark")}>
        Escuro
      </ThemeToggleButton>
      <ThemeToggleButton onClick={(e) => setColorMode("light")}>
        Claro
      </ThemeToggleButton>
    </>
  );
}
