"use client"

import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { MaxWidthContainer } from "@/ui/app/MaxWidthContainer";

const HeaderContainer = styled.header`
  min-height: 300px;
  background-color: var(--background);

  @media (min-width: 769px) {
    height: 100px;
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: var(--foreground);
`;

export function Header() {
  return (
    <HeaderContainer>
      <MaxWidthContainer>
        <HeaderNav>
          <StyledLink href="/">Home</StyledLink>
          <StyledLink href="/blog">Blog</StyledLink>
          <StyledLink href="/about">About</StyledLink>
        </HeaderNav>
      </MaxWidthContainer>
    </HeaderContainer>
  )
}
