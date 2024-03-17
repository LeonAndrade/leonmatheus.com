"use client"

import React from "react";
import styled from "styled-components";

import { Header } from "@/ui/app/Header";
import { Main } from "@/ui/app/Main";
import { Footer } from "@/ui/app/Footer";

const Container = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  isolation: isolate;
  scroll-behavior: smooth;
`
export function RootStackingContext({ children }: { children: React.ReactNode; }) {
  return (
    <Container>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Container>
  )
}

