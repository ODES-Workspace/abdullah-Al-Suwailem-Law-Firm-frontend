"use client";
import React from "react";
import { ConsultationForm, Footer, Header } from "@/shared";
import { useContextProvider } from "@/context/Context";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { showModal , handleModelDisplay } = useContextProvider();
  return (
    <>
      <Header />
      {children}
      <Footer />
      {showModal && (
        <div className="fixed top-0 w-[100vw] h-[100vh] left-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50" onClick={()=>{
          handleModelDisplay()
        }}>
          <ConsultationForm />
        </div>
      )}
    </>
  );
}
