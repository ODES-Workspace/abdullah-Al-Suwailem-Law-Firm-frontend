"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextProvider } from "@/context/Context";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib";

const links = [
  {
    ar: "الرئيسية",
    en: "Home",
    href: "/home",
  },
  {
    ar: "من نحن",
    en: "About",
    href: "/about",
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
  const { lang, setLang, handleModelDisplay } = useContextProvider();
  const route = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenSidebar() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="xl:max-w-[1233px] shadow-primary mx-auto py-2.5 xl:py-5 px-5 xl:px-25 flex justify-between items-center bg-primary-400 xl:bg-white fixed z-10 w-full right-0 left-0 top-0 xl:top-12 xl:rounded-2xl">
      <Image
        src="/menu.svg"
        width={20}
        height={20}
        alt="menu"
        className="xl:hidden cursor-pointer"
        onClick={() => handleOpenSidebar()}
      />

      <div className="text-white xl:text-primary ">
        <Logo className="h-[50px] w-[50px] xl:h-auto xl:w-auto" />
      </div>

      <div className=" gap-6 text-lg hidden xl:flex ">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link[lang]}
          </Link>
        ))}
      </div>
      <div className="gap-4 items-center text-sm hidden xl:flex">
        <div
          onClick={() => handleModelDisplay()}
          className="bg-primary py-2 px-10 text-white rounded-4xl cursor-pointer"
        >
          {lang === "ar" ? "احصل على استشارة" : " Get a Consultation"}
        </div>
        <div
          onClick={() => setLang(lang === "ar" ? "en" : "ar")}
          className="bg-primary py-2 px-10 text-white rounded-4xl cursor-pointer"
        >
          {lang === "ar" ? "EN" : "AR"}
        </div>{" "}
      </div>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 backdrop-blur-sm bg-opacity-30 z-40 xl:hidden"
            onClick={() => setIsOpen(false)}
          />
          {/* Sidebar */}
          <div
            className={cn(
              lang === "ar" ? "right-0" : "left-0",
              "xl:hidden absolute top-0 h-[100vh] p-4  w-[195px] bg-primary-50  shadow-primary z-50"
            )}
          >
            <div className="flex justify-between items-center border-b border-primary pb-2 mb-6 ">
              <Logo className="h-[33px] w-[33px] text-primary" />

              <Image
                src="/close.svg"
                width={20}
                height={20}
                alt="close"
                onClick={() => handleOpenSidebar()}
              />
            </div>
            <div className="flex flex-col gap-4 mb-6 ">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  onClick={() => handleOpenSidebar()}
                  className={cn(
                    route === link.href
                      ? "text-primary font-bold  text-xl pb-2 border-b "
                      : "text-primary-950",
                    "w-[91px]"
                  )}
                >
                  {link[lang]}
                </Link>
              ))}
            </div>
            <div
              onClick={() => {
                handleOpenSidebar();
                setLang(lang === "ar" ? "en" : "ar");
              }}
              className="bg-primary py-2 px-10 text-white rounded-4xl cursor-pointer text-center"
            >
              {lang === "ar" ? "EN" : "AR"}
            </div>{" "}
          </div>
        </>
      )}
    </div>
  );
}
