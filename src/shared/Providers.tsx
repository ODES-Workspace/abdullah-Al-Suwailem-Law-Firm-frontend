"use client";
import React, { useState } from "react";
import { Provider } from "@/context/Context";
import HtmlAttributes from "./HtmlAttributes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <HtmlAttributes />
        {children}
      </Provider>
    </QueryClientProvider>
  );
}
