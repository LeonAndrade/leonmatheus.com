import React from "react";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>About</h1>
      <div>{children}</div>
    </>
  )
}
