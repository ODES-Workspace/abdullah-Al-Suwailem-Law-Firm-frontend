"use client";
import { useContextProvider } from "@/context/Context";
import useServices from "@/hooks/useServices";
import { Item, Translation } from "@/lib";
import { Loading } from "@/shared";
import Image from "next/image";
import React from "react";

const text = {
  ar: {
    title: "خدمات شركة فهد السويلم",
    description: "خدمات قانونية شاملة مصممة خصيصًا لتلبية احتياجاتك",
  },

  en: {
    title: "Fahad Al-Suwailem Services",
    description: "Comprehensive legal services tailored to your needs",
  },
};

export default function Page() {
  const { lang, handleModelDisplay } = useContextProvider();
  const { data, isLoading } = useServices();

  return (
    <>
      <div className="bg-[url('/hero.svg')] md:h-[300px] lg:h-[600px] bg-no-repeat bg-center bg-cover relative">
        <div className="pt-30 lg:pt-50 pb-20 lg:pb-30 px-5  h-full flex items-center">
          <div className="max-w-[1233px] mx-auto w-full flex flex-col justify-center items-center h-full   text-white text-center gap-4">
            <div className="text-3xl lg:text-5xl font-bold">
              {text[lang].title}
            </div>
            <div className="max-w-[530px] text-xl lg:text-3xl ">
              {text[lang].description}
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loading>{lang === "ar" ? "جاري التحميل..." : "Loading..."}</Loading>
      ) : (
        <div className="py-20 px-5">
          <div className="max-w-[1233px] mx-auto  grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((s: Item, index: number) => {
              const translation = s?.translations.find(
                (t: Translation) => t.locale === lang
              );
              return (
                <div
                  key={s.id}
                  className="bg-primary-400 min-h-[538px]  p-6 flex flex-col gap-[10px] items-center text-center rounded-2xl service-card"
                >
                  <Image
                    src={`service${index + 1}.svg`}
                    alt={translation?.title || ""}
                    width={100}
                    height={100}
                  />

                  <div className="text-3xl font-bold text-primary-950 mb-[10px]">
                    {translation?.title}
                  </div>

                  <p className="text-2xl mb-[10px] text-white">
                    {translation?.description}
                  </p>

                  <button
                    className="mt-auto bg-secondary text-lg py-2 rounded-2xl w-full cursor-pointer"
                    onClick={() => handleModelDisplay()}
                  >
                    {lang === "ar" ? "اطلب استشارة" : "Request Consultation"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
