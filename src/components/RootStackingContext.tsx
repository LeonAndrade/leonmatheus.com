"use client";

import styled from "styled-components";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Container = styled.div`
  isolation: isolate;
  scroll-behavior: smooth;

  background-color: var(--color-background);
  font-family: var(--font-reading);
  color: var(--color-text);
`

export function RootStackingContext({ children, }: { children: React.ReactNode; }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

