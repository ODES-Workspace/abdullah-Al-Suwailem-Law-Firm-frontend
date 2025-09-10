"use client";
import { useLang } from "@/context/LangContext";
import useAccreditations from "@/hooks/useAccreditations";
import Image from "next/image";
import React from "react";

type Accreditation = {
  id: number;
  image: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
};
export default function Accreditations() {
  const { isLoading, data } = useAccreditations();
  const { lang } = useLang();
  if (isLoading) {
    return <div>{lang === "ar" ? "جاري التحميل..." : "Loading..."}</div>;
  }
  return (
    <div className="py-10 lg:py-[90px] px-5 bg-neutral-200">
      <div className="max-w-[1233px] mx-auto w-full gap-12 flex flex-col">
        <div className="text-3xl lg:text-5xl text-center font-bold text-primary-950">
          {data.title[lang]}
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-[25px]">
          {data.accreditations.map((a: Accreditation) => {
            return (
              <div key={a.id} className="flex flex-col ">
                <div className="relative h-[50px] mb-6">
                  <Image
                    src={a.image}
                    alt={a.title[lang]}
                    fill
                    className="!w-fit h-full "
                  />
                </div>
                <Image
                  src="/line2.svg"
                  width={260}
                  height={17}
                  alt="quote"
                  className="mb-[10px]"
                />

                <div className="flex gap-1 flex-col">
                  <div className="font-bold">{a.title[lang]}</div>
                  <div className="text-sm">{a.description[lang]}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
