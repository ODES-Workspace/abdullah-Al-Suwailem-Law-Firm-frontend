"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";

const links = [
  {
    ar: "الرئيسية",
    en: "Home",
    href: "/",
  },
  {
    ar: "من نحن",
    en: "About",
    href: "/news",
  },
  {
    ar: "خدماتنا",
    en: "Our Services",
    href: "/services",
  },
  {
    ar: "مجالاتنا",
    en: "Our Fields",
    href: "/fields",
  },

  {
    ar: "الإعتمادات",
    en: "Credentials",
    href: "/credentials",
  },

  {
    ar: "الاتصال بنا",
    en: "Contact Us",
    href: "/contact-us",
  },
];

export default function Header() {
  const { lang, setLang } = useLang();
  return (
    <div className="max-w-[1233px] shadow-primary mx-auto py-5 px-25 flex justify-between items-center bg-white fixed z-10 w-full right-0 left-0 top-12 rounded-2xl">
      <Image src="/logo.svg" alt="logo" width={87} height={87} />
      <div className="flex gap-6 text-lg ">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link[lang]}
          </Link>
        ))}
      </div>
      <div className="flex gap-4 items-center text-sm">
        <Link href="/" className="bg-primary py-2 px-10 text-white rounded-4xl">
          {lang === "ar" ? "احصل على استشارة" : " Get a Consultation"}
        </Link>
        <div
          onClick={() => setLang(lang === "ar" ? "en" : "ar")}
          className="bg-primary py-2 px-10 text-white rounded-4xl cursor-pointer"
        >
          {lang === "ar" ? "EN" : "AR"}
        </div>{" "}
      </div>
    </div>
  );
}
