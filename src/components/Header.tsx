import React from "react";
import styled from "styled-components";

import { MaxWidthContainer } from "@/components/MaxWidthContainer";

const PositionedContainer = styled.div`
  height: 100px;
  position: relative;
  background-color: var(--color-background);

  @media (min-width: 769px) {
    height: 200px;
  }
`;

const HeaderContainer = styled(MaxWidthContainer)`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: center;
`;

export function Header() {
  return (
    <PositionedContainer>
      <HeaderContainer>
        Header - Leon Matheus
      </HeaderContainer>
    </PositionedContainer>
  )
}
