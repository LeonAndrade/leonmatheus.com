import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./RootStackingContext.module.css";
import MaxWidthContainer from "../MaxWidthContainer";

function RootStackingContext({ children }: { children: React.ReactNode; }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MaxWidthContainer>
        {children}
      </MaxWidthContainer>
      <Footer />
    </div>
  )
}

export default RootStackingContext;
