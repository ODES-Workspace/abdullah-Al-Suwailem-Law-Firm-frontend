/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type FormFieldProps = {
  label: string;
  name: string;
  register: any;
  required?: boolean;
  type?: string;
  as?: "input" | "textarea";
  rows?: number; // for textarea
};

export default function FormField({
  label,
  name,
  register,
  required = true,
  type = "text",
  as = "input",
  rows = 3,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-primary font-bold">{label}</label>
      {as === "textarea" ? (
        <textarea
          className="border p-2 border-primary rounded-xl"
          rows={rows}
          {...register(name, { required })}
        />
      ) : (
        <input
          className="border p-2 border-primary rounded-xl"
          type={type}
          {...register(name, { required })}
        />
      )}
    </div>
  );
}
