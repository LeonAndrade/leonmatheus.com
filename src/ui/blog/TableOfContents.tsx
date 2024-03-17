import React from "react";
import styled from "styled-components";

const TocContainer = styled.div`
  border: 1px solid red;
  min-width: 26%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;


export function TableOfContents({ children }: { children: React.ReactNode }) {
  return (
    <TocContainer>
      {children}
    </TocContainer>
  )
}
