"use client";
import { useContextProvider } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Loading from "./Loading";
import useServices from "@/hooks/useServices";
import { Item, Translation } from "@/lib";

const text = {
  ar: {
    title: "خدمات شركة فهد السويلم",
    description:
      "نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية جميع احتياجاتكم القانونية",
    link: "عرض كل الخدمات",
  },

  en: {
    title: "Fahad Al-Suwailem Services",
    description:
      "We offer a comprehensive range of specialized legal services to meet all your legal needs",
    link: "View All Services",
  },
};

export default function HomeServices() {
  const { isLoading, data } = useServices();
  const { lang, handleModelDisplay } = useContextProvider();

  if (isLoading) {
    return (
      <Loading>{lang === "ar" ? "جاري التحميل..." : "Loading..."}</Loading>
    );
  }
  return (
    <div className="py-10 px-5">
      <div className="max-w-[1233px] mx-auto w-full flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row text-center lg:text-start justify-between gap-2 items-center">
          <div className="flex  flex-col gap-5 ">
            <h3 className=" text-3xl lg:text-5xl font-bold">
              {text[lang].title}
            </h3>
            <p className="text-lg text-grey-700">{text[lang].description}</p>
          </div>

          <Link
            href="/services"
            className="text-primary-700 text-2xl font-extrabold underline"
          >
            {text[lang].link}
          </Link>
        </div>
        <div className="grid mdgrid-cols-2 lg:grid-cols-3 gap-6">
          {data.slice(0, 6).map((s: Item, index: number) => {
            const translation = s?.translations.find(
              (t: Translation) => t.locale === lang
            );
            return (
              <div
                key={s.id}
                className="bg-primary py-3 px-5 relative flex flex-col gap-3  rounded-2xl shadow-primary lg:hover:rounded-bl-none lg:hover:rounded-br-none group cursor-pointer transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 ">
                    <div className="p-1 bg-neutral-100/25 rounded-lg h-full">
                      <Image
                        src={`home-service${index + 1}.svg`}
                        alt="test"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="text-white text-lg">
                      {translation?.title}
                    </div>
                  </div>
                  <Image
                    src="/arrow.svg"
                    alt="test"
                    width={33}
                    height={19}
                    className="transition-all duration-300 group-hover:rotate-180"
                  />
                </div>
                <div className="flex lg:absolute shadow-primary  gap-5 flex-col rounded-xl lg:roundex-none z-5 w-full top-full left-0 rounded-br-2xl rounded-bl-2xl bg-white  py-3 px-5  lg:h-[333px]  justify-between  lg:opacity-0 lg:hidden group-hover:lg:flex  group-hover:opacity-100 transition-all duration-300">
                  <div>{translation?.description}</div>
                  <div
                    className="border-primary-950 text-primary-950 text-sm border-2 w-full py-3 text-center rounded-lg"
                    onClick={() => handleModelDisplay()}
                  >
                    {lang === "ar" ? "اطلب استشارة" : "Request Consultation"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
