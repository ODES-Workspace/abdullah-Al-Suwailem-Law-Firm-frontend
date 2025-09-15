"use client";
import { useContextProvider } from "@/context/Context";
import { Item, Translation } from "@/lib";

import Image from "next/image";
import React from "react";
import Loading from "./Loading";
import { getImageUrl } from "@/Helpers/getImageUrl";
import { usePost } from "@/hooks/usePost";

export default function Features() {
  const { data, isLoading } = usePost("features");
  const { lang } = useContextProvider();

  if (isLoading) {
    return (
      <Loading> {lang === "ar" ? "جاري التحميل..." : "Loading..."}</Loading>
    );
  }

  return (
    <div className="py-10 lg:py-23 px-5 bg-neutral-200" id="features">
      <div className="max-w-[1073px] flex-wrap mx-auto w-full flex-col sm:flex-row flex gap-10 lg:gap-2 items-center justify-around lg:justify-between">
        {data?.map((f: Item, index: number) => {
          const translation = f?.translations?.find(
            (t: Translation) => t.locale === lang
          );
          return (
            <div
              key={index}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <Image
                src={getImageUrl(f.featured_image)}
                alt={translation?.title || ""}
                width={70}
                height={70}
              />
              <div className="text-primary-950 text-2xl">
                {translation?.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
