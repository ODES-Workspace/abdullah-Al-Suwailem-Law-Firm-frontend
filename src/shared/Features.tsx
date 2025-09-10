"use client";
import { useLang } from "@/context/LangContext";
import useFeatures from "@/hooks/useFeatures";
import Image from "next/image";
import React from "react";

type Feature = {
  image: string;
  title: {
    en: string;
    ar: string;
  };
};

export default function Features() {
  const { data, isLoading } = useFeatures();
  const { lang } = useLang();

  if (isLoading) {
    return <div> {lang === "ar" ? "جاري التحميل..." : "Loading..."}</div>;
  }

  return (
    <div className="py-10 lg:py-23 px-5 bg-neutral-200">
      <div className="max-w-[1073px] mx-auto w-full flex-col sm:flex-row flex gap-10 lg:gap-2 items-center justify-around lg:justify-between">
        {data?.map((f: Feature, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <div className="w-[70px] h-[70px] relative">
                <Image src={f.image} alt={f.title[lang]} fill />
              </div>
              <div className="text-primary-950 text-2xl">{f.title[lang]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
