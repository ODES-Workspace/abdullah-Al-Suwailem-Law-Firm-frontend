"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const { lang } = useLang();

  const content = {
    sections: lang === "ar" ? "الاقسام" : "Sections",
    home: lang === "ar" ? "الرئيسية" : "Home",
    about: lang === "ar" ? "من نحن" : "About Us",
    values: lang === "ar" ? "قيمنا" : "Our Values",
    fields: lang === "ar" ? "مجالاتنا" : "Our Fields",
    accreditations: lang === "ar" ? "الإعتمادات" : "Accreditations",

    services: lang === "ar" ? "خدماتنا" : "Our Services",
    litigation: lang === "ar" ? "الترافع والتقاضي" : "Litigation",
    legalConsult: lang === "ar" ? "الإستشارات القانونية" : "Legal Consultation",
    drafting:
      lang === "ar" ? "الصياغة والمراجعة القانونية" : "Legal Drafting & Review",
    inheritance: lang === "ar" ? "تصفية التركات" : "Estate Settlement",
    mediation: lang === "ar" ? "الوساطة القانونية" : "Legal Mediation",
    procedures: lang === "ar" ? "الإجراءات القانونية" : "Legal Procedures",
    guardianship: lang === "ar" ? "الحراسة القضائية" : "Judicial Guardianship",
    notarization: lang === "ar" ? "التــــوثيق" : "Notarization",
    clientRegs:
      lang === "ar"
        ? "إعتماد لوائح تنظيم العميل"
        : "Client Regulations Approval",

    followUs: lang === "ar" ? "تابعنا على" : "Follow Us",
    city: lang === "ar" ? "المدينة: يكتب اسم المدينة" : "City: Write city name",
    district:
      lang === "ar" ? "الحي : يكتب اسم الحي" : "District: Write district name",
    street:
      lang === "ar"
        ? "الطريق : يكتب العنوان بالتفصيل"
        : "Street: Write full address",
    mapLink:
      lang === "ar"
        ? "اضفط هنا للموقع علي الخريطة"
        : "Click here for location on map",
    rights:
      lang === "ar"
        ? "جميع الحقوق محفوظة 2025، فهد السويلم للمحاماة"
        : "All rights reserved 2025, Fahad Al Suwailem Law Firm",
  };

  return (
    <div className="py-10 px-5 bg-primary-950">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid  md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] text-white gap-6 mb-10">
          <div className="flex flex-col gap-4">
            <div className="font-bold border-b border-white/30 pb-2">
              {content.sections}
            </div>
            <div className="text-sm grid grid-cols-2 gap-2">
              <a href="#">{content.home}</a>
              <a href="#">{content.about}</a>
              <a href="#">{content.values}</a>
              <a href="#">{content.fields}</a>
              <a href="#">{content.accreditations}</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-bold border-b border-white/30 pb-2">
              {content.services}
            </div>
            <div className="text-sm grid grid-cols-2 gap-2">
              <a href="#">{content.litigation}</a>
              <a href="#">{content.legalConsult}</a>
              <a href="#">{content.drafting}</a>
              <a href="#">{content.inheritance}</a>
              <a href="#">{content.mediation}</a>
              <a href="#">{content.procedures}</a>
              <a href="#">{content.guardianship}</a>
              <a href="#">{content.notarization}</a>
              <a href="#">{content.clientRegs}</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-bold border-b border-white/30 pb-2">
              {content.followUs}
            </div>
            <div className="flex gap-2 items-center">
              <a href="#" className="p-2 bg-white/30 rounded-lg">
                <Image
                  src="/instagram-white.svg"
                  width={20}
                  height={20}
                  alt="instagram"
                />
              </a>
              <a href="#" className="p-2 bg-white/30 rounded-lg">
                <Image
                  src="/linkedin-white.svg"
                  width={20}
                  height={20}
                  alt="linkedin"
                />
              </a>
              <a href="#" className="p-2 bg-white/30 rounded-lg">
                <Image src="/x-white.svg" width={20} height={20} alt="x" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-[64px] justify-center items-center mb-4 text-white text-sm">
          <div>{content.city}</div>
          <div>{content.district}</div>
          <div>{content.street}</div>
          <a href="#" className="underline flex gap-1 items-center">
            <Image src="/map-marker.svg" width={24} height={24} alt="map" />
            {content.mapLink}
          </a>
        </div>

        <div className="flex justify-center items-center gap-2 flex-col">
          <Image src="/logo-white.svg" alt="logo" width={55} height={55} />
          <div className="text-sm text-white">{content.rights}</div>
        </div>
      </div>
    </div>
  );
}
