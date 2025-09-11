import { cn } from "@/lib";
import React from "react";

export default function Input({
  className,
  value,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div
      className={cn(
        "py-[10px]  border-primary border  rounded-[14px] px-3 w-full",
        value && "border-primary-blue text-primary-blue",
        className
      )}
    >
      <input
        {...props}
        className="placeholder:font-arabic-light w-full text-2xl outline-none"
      />
    </div>
  );
}
