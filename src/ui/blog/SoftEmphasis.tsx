"use client"

import React from "react";
import styled from "styled-components";

const Emphasis = styled.em`
  color: palevioletred;
  font-size: 1.2rem;
  font-weight: bold;
`;

export function SoftEmphasis({ children }: { children: React.ReactNode }) {
  return (
    <Emphasis>
      {children}
    </Emphasis>
  )
}
