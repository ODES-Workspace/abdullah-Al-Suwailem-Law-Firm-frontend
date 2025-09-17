"use client";
import { useContextProvider } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const { lang } = useContextProvider();

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
    city: lang === "ar" ? "المدينة:  الرياض" : "City: Riyadh",
    district: lang === "ar" ? "الحي :  القيروان" : "District: Al Qirawan",
    street:
      lang === "ar"
        ? "الطريق : الرياض – القيروان – شارع الأمير محمد بن سعد بن عبدالعزيز، مبنى 6273، الرقم الفرعي 2788، الرمز البريدي 13531"
        : "Street: Riyadh – Al Qirawan – Prince Mohammed Bin Saad Bin Abdulaziz Road, Building 6273, Unit 2788, P.O. Box 13531",
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
              <Link href="/home">{content.home}</Link>
              <Link href="/about">{content.about}</Link>
              <Link href="home/#features">{content.values}</Link>
              <Link href="home/#fields">{content.fields}</Link>
              <Link href="home/#accreditations">{content.accreditations}</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-bold border-b border-white/30 pb-2">
              {content.services}
            </div>
            <div className="text-sm grid grid-cols-2 gap-2">
              <a href="/services" className="cursor-pointer">
                {content.drafting}
              </a>
              <a href="/services" className="cursor-pointer">
                {content.litigation}
              </a>
              <a href="/services" className="cursor-pointer">
                {content.clientRegs}
              </a>
              <a href="/services" className="cursor-pointer">
                {content.mediation}
              </a>
              <a href="/services" className="cursor-pointer">
                {content.legalConsult}
              </a>
              <a href="/services" className="cursor-pointer">
                {content.inheritance}
              </a>
              <a href="/services" className="cursor-pointer">
                {content.guardianship}
              </a>
              <a href="/services" className="cursor-pointer">
                {content.notarization}
              </a>
              <a href="/services" className="cursor-pointer">
                {content.procedures}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-bold border-b border-white/30 pb-2">
              {content.followUs}
            </div>
            <div className="flex gap-2 items-center">
              {/* <a href="#" className="p-2 bg-white/30 rounded-lg">
                <Image
                  src="/instagram-white.svg"
                  width={20}
                  height={20}
                  alt="instagram"
                />
              </a> */}
              <a
                href="https://www.linkedin.com/company/fs-law-firm/"
                className="p-2 bg-white/30 rounded-lg"
              >
                <Image
                  src="/linkedin-white.svg"
                  width={20}
                  height={20}
                  alt="linkedin"
                />
              </a>
              <a
                href="https://x.com/fs_lawfirm?s=21&t=1syTIcLG2quZ6-U48-H6zw"
                className="p-2 bg-white/30 rounded-lg"
              >
                <Image src="/x-white.svg" width={20} height={20} alt="x" />
              </a>
              <a
                href="https://wa.me/966536571719"
                className="p-2 bg-white/30 rounded-lg"
              >
                <Image
                  src="/whatsapp-white.svg"
                  width={20}
                  height={20}
                  alt="x"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex text-center lg:text-start flex-col gap-4 lg:flex-row  lg:justify-between justify-center items-center mb-4 text-white text-sm">
          <div>{content.city}</div>
          <div>{content.district}</div>
          <div>{content.street}</div>
          <Link
            href="https://maps.app.goo.gl/SBoEms7oJ3b88i3cA?g_st=ic"
            className="underline flex gap-1 items-center"
          >
            <Image src="/map-marker.svg" width={24} height={24} alt="map" />
            {content.mapLink}
          </Link>
        </div>

        <div className="flex justify-center items-center gap-2 flex-col">
          <Image src="/logo-white.svg" alt="logo" width={55} height={55} />
          <div className="text-sm text-white">{content.rights}</div>
        </div>
      </div>
    </div>
  );
}
