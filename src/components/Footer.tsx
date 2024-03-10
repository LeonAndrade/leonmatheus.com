"use client";

import React from "react";
import styled from "styled-components";

import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Container = styled.footer`
  min-height: 200px;
  position: sticky;
  background-color: var(--color-primary);
`;

export function Footer() {
  return (
    <Container>
      <MaxWidthContainer>
        <ThemeToggle />
      </MaxWidthContainer>
    </Container>
  )
}
