"use client";
import React, { useState } from "react";
import { LangProvider } from "@/context/LangContext";
import HtmlAttributes from "./HtmlAttributes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <HtmlAttributes />
        {children}
      </LangProvider>
    </QueryClientProvider>
  );
}
