"use client"

import React from "react";
import styled from "styled-components"

import { MaxWidthContainer } from "@/ui/app/MaxWidthContainer";

const Container = styled.main`
  flex: 1;
  background-color: var(--blue-strong);
`;

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <MaxWidthContainer>
        {children}
      </MaxWidthContainer>
    </Container>
  )
}
