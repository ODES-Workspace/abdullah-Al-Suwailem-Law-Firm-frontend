"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "ar" | "en";
interface ContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  showModal: boolean;
  handleModelDisplay: () => void;
}

const Context = createContext<ContextProps | undefined>(undefined);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("ar");
  const [ready, setReady] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleModelDisplay = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as Lang | null;
    if (storedLang) setLangState(storedLang);
    setReady(true);
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  if (!ready) return null;

  return (
    <Context.Provider value={{ lang, setLang, showModal, handleModelDisplay }}>
      {children}
    </Context.Provider>
  );
};

export const useContextProvider = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useContextProvider must be used within Provider");
  return context;
};
