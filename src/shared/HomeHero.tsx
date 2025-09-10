"use client";
import { useLang } from "@/context/LangContext";
import useHomeHero from "@/hooks/useHomeHero";
import React from "react";
import Goals from "./Goals";

export default function HomeHero() {
  const { data, isLoading } = useHomeHero();
  const { lang } = useLang();
  const isArabic = lang === "ar";

  return (
    <div className="h-[985px] relative  bg-no-repeat bg-center bg-cover bg-[linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('/fahad.jpg')]">
      <div className="py-50 px-5  h-full ">
        <div className=" mx-auto  flex flex-col  h-full justify-center max-w-[1233px] w-full text-white">
          {isLoading || !data ? (
            <div className="flex-col justify-center items-center w-full text-center">
              {isArabic ? "جاري التحميل..." : "Loading..."}
            </div>
          ) : (
            <div className="max-w-[689px] gap-6 flex flex-col">
              <h1
                className={`text-6xl font-bold capitalize ${
                  isArabic ? "leading-[101px]" : "leading-[70px]"
                }`}
              >
                {data?.[lang].title}
              </h1>
              <p className="text-lg">{data?.[lang].subtitle}</p>

              <div className="bg-primary py-2 px-4 text-white rounded-4xl cursor-pointer w-fit">
                &quot;{data?.[lang].buttonText}&quot;
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute -bottom-[50px] right-0 left-0 ">
        <Goals />
      </div>
    </div>
  );
}
