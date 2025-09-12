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
    <div
      className=" grid grid-rows-[90px_1fr] lg:grid-rows-1 lg:grid-cols-[auto_1fr] h-[100vh]  "
      dir="rtl"
    >
      <DashboardSidebar />
      <div className="overflow-y-auto p-5">{children}</div>
    </div>
  );
}
