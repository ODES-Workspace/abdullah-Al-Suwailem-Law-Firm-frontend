"use client";
import { useContextProvider } from "@/context/Context";
import { useEffect } from "react";

export default function HtmlAttributes() {
  const { lang } = useContextProvider();

  useEffect(() => {
    // Set the lang attribute on the html element
    document.documentElement.lang = lang;

    // Set the dir attribute based on language
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return null; // This component doesn't render anything
}
