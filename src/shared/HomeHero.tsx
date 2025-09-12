"use client";
import { useContextProvider } from "@/context/Context";
import React from "react";
import Goals from "./Goals";
import { Meta, Translation } from "@/lib";
import { usePost } from "@/hooks/usePost";

export default function HomeHero() {
  const { data, isLoading } = usePost("hero");
  const { lang } = useContextProvider();
  const isArabic = lang === "ar";

  const translation = data?.[0]?.translations?.find(
    (t: Translation) => t.locale === lang
  );

  const buttonMeta = data?.[0]?.metas?.find(
    (t: Meta) => t.meta_key === "buttonText"
  );

  const buttonText = buttonMeta?.translations?.find(
    (tr: Translation) => tr.locale === lang
  )?.value;

  return (
    <div className="relative">
      <div className=" h-[100vh] lg:h-[985px]   bg-no-repeat bg-center bg-cover bg-[linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('/fahad.jpg')]">
        <div className="py-30 lg:py-50 px-5  h-full ">
          <div className=" mx-auto  flex flex-col  h-full justify-center max-w-[1233px] w-full text-white">
            {isLoading || !data ? (
              <div className="flex-col justify-center items-center w-full text-center">
                {isArabic ? "جاري التحميل..." : "Loading..."}
              </div>
            ) : (
              <div className="lg:max-w-[689px] gap-6 flex flex-col items-center lg:items-start text-center lg:text-start">
                <h1
                  className={`text-3xl md:text-4xl leading-[50px] lg:text-6xl font-bold capitalize ${
                    isArabic ? "lg:leading-[101px]" : "lg:leading-[70px]"
                  }`}
                >
                  {translation?.title}
                </h1>
                <p className="text-lg">{translation?.description}</p>

                <div className="bg-primary py-2 px-4 text-white rounded-4xl cursor-pointer w-fit">
                  &quot;{buttonText}&quot;
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" py-5 lg:py-0 lg:absolute lg:-bottom-[50px] right-0 left-0 ">
        <Goals />
      </div>{" "}
    </div>
  );
}
