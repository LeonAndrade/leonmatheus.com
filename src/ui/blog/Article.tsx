"use client"

import React from "react"
import styled from "styled-components"


const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding-inline-start: 32px;
  padding-inline-end: 32px;


  h1, h2, h3 {
    color: var(--foreground);
    padding-block-end: 16px;
  }
`;

export function Article({ children }: { children: React.ReactNode }) {
  return (
    <ArticleContainer>
      {children}
    </ArticleContainer>
  )
}
