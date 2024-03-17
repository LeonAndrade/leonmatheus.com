"use client"

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  color: var(--foreground);
`;

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container>
        {children}
      </Container>
    </>
  );
}
