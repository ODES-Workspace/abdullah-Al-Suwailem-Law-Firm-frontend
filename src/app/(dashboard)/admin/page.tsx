"use client";
import {
  MissionForm,
  HeroForm,
  VissionForm,
  PresidentForm,
  FeaturesForm,
  ServicesForm,
  FieldsForm,
  AccreditationForm,
  PartnersForm,
  AboutForm,
} from "@/shared";
import Select from "@/shared/Select";
import { useState } from "react";

const OPTIONS = [
  { label: "القسم الرئيسي", value: "hero" },
  { label: "الرؤية", value: "vission" },
  { label: "عن الشركة", value: "about" },
  { label: "الرسالة", value: "mission" },
  { label: "كلمة الرئيس", value: "president" },
  { label: "المميزات", value: "features" },
  { label: "الخدمات", value: "services" },
  { label: "المجالات", value: "fields" },
  { label: "الإعتمادات", value: "accreditations" },
  { label: "شركاؤنا", value: "partners" },
];

export default function Page() {
  const [section, setSection] = useState("hero");
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between gap-2 flex-wrap">
        <div className="text  text-xl lg:text-3xl font-bold">إدارة المحتوى</div>
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
      {section === "vission" && <VissionForm />}
      {section === "mission" && <MissionForm />}
      {section === "president" && <PresidentForm />}
      {section === "features" && <FeaturesForm />}
      {section === "services" && <ServicesForm />}
      {section === "fields" && <FieldsForm />}
      {section === "accreditations" && <AccreditationForm />}
      {section === "partners" && <PartnersForm />}
      {section === "about" && <AboutForm />}
    </div>
  );
}
