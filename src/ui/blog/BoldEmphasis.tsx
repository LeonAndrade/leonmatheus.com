"use client"

import React from "react";
import styled from "styled-components";

const Span = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
  font-style: oblique;
  color: var(--foreground);
`;


export function BoldEmphasis({ children }: { children: React.ReactNode }) {
  return (
    <Span>
      {children}
    </Span>
  )
}
