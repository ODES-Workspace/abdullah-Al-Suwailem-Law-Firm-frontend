"use client";
import HeroForm from "@/shared/HeroForm";
import Select from "@/shared/Select";
import { useState } from "react";

const OPTIONS = [
  { label: "القسم الرئيسي", value: "hero" },
  { label: "الرؤية", value: "vission" },
  { label: "الرسالة", value: "mission" },
];

export default function Page() {
  const [section, setSection] = useState("hero");
  return (
    <div className="p-5 flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <div className="text text-3xl font-bold">إدارة المحتوى</div>
        <Select
          options={OPTIONS}
          variant="secondary"
          placeholder="إختر الصفحة"
          className="max-w-[300px] !text-xs"
          value={section}
          onChange={(value) => setSection(value)}
        />
      </div>

      {section === "hero" && <HeroForm />}
    </div>
  );
}
