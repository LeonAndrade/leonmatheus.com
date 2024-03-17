"use client"

import React from "react";
import styled from "styled-components";

const StyledP = styled.div`
  padding-block-end: 32px;
`;

export function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <StyledP>
      {children}
    </StyledP>
  )
}

