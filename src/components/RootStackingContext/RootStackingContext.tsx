import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./RootStackingContext.module.css";

function RootStackingContext({ children }: { children: React.ReactNode; }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default RootStackingContext;
