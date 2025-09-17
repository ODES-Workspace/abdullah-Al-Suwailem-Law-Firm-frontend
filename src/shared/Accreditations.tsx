"use client";
import { useContextProvider } from "@/context/Context";
import Image from "next/image";
import React from "react";
import Loading from "./Loading";
import { Item, Translation } from "@/lib";
import { getImageUrl } from "@/Helpers/getImageUrl";
import { usePost } from "@/hooks/usePost";

export default function Accreditations() {
  const { isLoading, data } = usePost("accreditations");
  const { lang } = useContextProvider();
  if (isLoading) {
    return (
      <Loading>{lang === "ar" ? "جاري التحميل..." : "Loading..."}</Loading>
    );
  }
  return (
    <div id="accreditations" className="py-10 lg:py-[90px] px-5 bg-neutral-200">
      <div className="max-w-[1233px] mx-auto w-full gap-12 flex flex-col">
        <div className="text-3xl lg:text-5xl text-center font-bold text-primary-950">
          {lang === "ar" ? "الإعتمادات" : "Accreditations"}
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.map((a: Item) => {
            const translation = a?.translations?.find(
              (t: Translation) => t.locale === lang
            );
            return (
              <div key={a.id} className="flex flex-col ">
                <div className="relative h-[50px] mb-6">
                  <Image
                    src={getImageUrl(a.featured_image)}
                    alt={translation?.title || ""}
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

                <div className="flex gap-2 flex-col">
                  <div className="font-bold">{translation?.title}</div>
                  <div className="text-justify">{translation?.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
