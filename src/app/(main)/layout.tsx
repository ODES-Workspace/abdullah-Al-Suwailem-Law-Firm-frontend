import React from "react";
import { Footer, Header } from "@/shared";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}
