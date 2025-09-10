"use client";
import { useLang } from "@/context/LangContext";
import { useAbout } from "@/hooks";
import { Goals, PresidentsMessage } from "@/shared";
import React from "react";

export default function Page() {
  const { data, isLoading } = useAbout();
  const { lang } = useLang();

  if (isLoading) {
    return <div>{lang === "ar" ? "جاري التحميل..." : "Loading..."}</div>;
  }

  return (
    <>
      <div className="bg-[url('/hero.svg')] h-[528px] bg-no-repeat bg-center bg-cover relative">
        <div className="py-50 px-5  h-full flex items-center">
          <div className="max-w-[1233px] mx-auto w-full flex justify-center items-center h-full text-5xl font-bold text-white text-center">
            {data.title[lang]}
          </div>
        </div>
      </div>
      <div className="py-8 pb-20 px-5">
        <div className="max-w-[1233px] mx-auto text-2xl w-full flex gap-2 flex-col">
          <p>{data.description[lang]}</p>
          <p>{data.moreDescription[lang]}</p>
        </div>
      </div>
      <PresidentsMessage borderBottom={false} />
      <div className="py-20">
        <Goals className={"!bg-primary-500"} />
      </div>
    </>
  );
}
