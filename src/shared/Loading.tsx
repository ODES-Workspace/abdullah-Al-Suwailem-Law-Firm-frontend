import React from "react";

export default function Loading({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5">
      <div className="max-w-[1233px] mx-auto flex justify-center items-center h-[300px]">
        {children}
      </div>
    </div>
  );
}
