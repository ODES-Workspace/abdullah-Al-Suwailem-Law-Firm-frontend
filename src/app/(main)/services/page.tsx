"use client";
import { useLang } from "@/context/LangContext";
import useServicePage from "@/hooks/useServicePage";
import Image from "next/image";
import React from "react";

type Service = {
  id: number;
  icon: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
};

export default function Page() {
  const { lang } = useLang();
  const { data, isLoading } = useServicePage();

  if (isLoading) {
    return <div>{lang === "ar" ? "جاري التحميل..." : "Loading..."}</div>;
  }

  return (
    <>
      <div className="bg-[url('/hero.svg')] h-[600px] bg-no-repeat bg-center bg-cover relative">
        <div className="pt-50 pb-30 px-5  h-full flex items-center">
          <div className="max-w-[1233px] mx-auto w-full flex flex-col justify-center items-center h-full   text-white text-center gap-4">
            <div className="text-5xl font-bold">{data.title[lang]}</div>
            <div className="max-w-[530px] text-3xl ">
              {data["sub-titles"][lang]}
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-5">
        <div className="max-w-[1233px] mx-auto  grid grid-cols-3 gap-6">
          {data.services.map((s: Service) => {
            return (
              <div
                key={s.id}
                className="bg-primary-400 min-h-[538px]  p-6 flex flex-col gap-[10px] items-center text-center rounded-2xl service-card"
              >
                <Image
                  src={s.icon}
                  alt={s.title[lang]}
                  width={100}
                  height={100}
                />

                <div className="text-3xl font-bold text-primary-950 mb-[10px]">
                  {s.title[lang]}
                </div>

                <p className="text-2xl mb-[10px] text-white">
                  {s.description[lang]}
                </p>

                <button className="mt-auto bg-secondary text-lg py-2 rounded-2xl w-full cursor-pointer">
                  {lang === "ar" ? "اطلب استشارة" : "Request Consultation"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
