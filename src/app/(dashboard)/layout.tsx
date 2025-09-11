"use client";
import DashboardSidebar from "@/shared/DashboardSidebar";
import React, { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="grid grid-cols-[auto_1fr] h-[100vh]">
      <DashboardSidebar />
      <div className="overflow-y-auto">{children}</div>
    </div>
  );
}
