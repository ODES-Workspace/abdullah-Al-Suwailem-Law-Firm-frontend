"use client";
import { useContextProvider } from "@/context/Context";
import { getTranslation } from "@/Helpers/getTranslation";
import { usePost } from "@/hooks/usePost";
import { Goals, Loading, PresidentsMessage } from "@/shared";
import React from "react";

export default function Page() {
  const { lang } = useContextProvider();
  const { data, isLoading } = usePost("about");

  const title = getTranslation(data?.[0]?.translations, lang, "title") || [];
  const desc =
    getTranslation(data?.[0]?.translations, lang, "description") || [];

  if (isLoading) {
    return (
      <Loading> {lang === "ar" ? "جاري التحميل..." : "Loading..."}</Loading>
    );
  }

  return (
    <>
      <div className="bg-[url('/hero.svg')]  md:h-[300px] lg:h-[600px] bg-no-repeat bg-center bg-cover relative">
        <div className="pt-30 lg:pt-50 pb-20 lg:pb-30 px-5  h-full flex items-center">
          <div className="max-w-[1233px] mx-auto w-full flex justify-center items-center h-full text-3xl lg:text-5xl font-bold text-white text-center">
            {lang === "ar" ? "من نحن" : "About Us"}
          </div>
        </div>
      </div>
      <div className="py-10 pb-10 lg:py-8 lg:pb-20 px-5">
        <div className="max-w-[1233px] mx-auto text-2xl w-full flex gap-2 flex-col">
          {<p>{title}</p>}
          <p>{desc}</p>
        </div>
      </div>
      <PresidentsMessage borderBottom={false} />
      <div className="py-20">
        <Goals className={"!bg-primary-500"} />
      </div>
    </>
  );
}
