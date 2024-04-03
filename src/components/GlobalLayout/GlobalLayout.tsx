import React from "react";

import RootStackingContext from "@/components/RootStackingContext";
import Main from "@/components/Main";
import Header from "@/components/Header";
import GlobalSidebar from "@/components/GlobalSidebar";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import ContentContainer from "@/components/ContentContainer";

import styles from "./GlobalLayout.module.css";

function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.layout_wrapper}>
        <GlobalSidebar />
        <RootStackingContext>
          <Main>
            <MaxWidthContainer>
              <ContentContainer>
                {children}
              </ContentContainer>
            </MaxWidthContainer>
          </Main>
        </RootStackingContext>
      </div>
    </div>
  );
}

export default GlobalLayout;
