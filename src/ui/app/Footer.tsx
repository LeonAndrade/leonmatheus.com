"use client";

import React from "react";
import styled from "styled-components";

import { MaxWidthContainer } from "@/ui/app/MaxWidthContainer";
import { ThemeToggle } from "@/ui/ThemeToggle";

const Container = styled.footer`
  min-height: 200px;
  margin-top: auto;
  background-color: var(--background);
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
