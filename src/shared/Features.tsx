"use client";
import { useContextProvider } from "@/context/Context";
import useFeatures from "@/hooks/useFeatures";
import { Item, Translation } from "@/lib";
import { getImageUrl } from "@/Helpers/getImageUrl";

import Image from "next/image";
import React from "react";
import Loading from "./Loading";

export default function Features() {
  const { data, isLoading } = useFeatures();
  const { lang } = useContextProvider();

  if (isLoading) {
    return (
      <Loading> {lang === "ar" ? "جاري التحميل..." : "Loading..."}</Loading>
    );
  }

  return (
    <div className="py-10 lg:py-23 px-5 bg-neutral-200">
      <div className="max-w-[1073px] mx-auto w-full flex-col sm:flex-row flex gap-10 lg:gap-2 items-center justify-around lg:justify-between">
        {data?.map((f: Item, index: number) => {
          const translation = f?.translations?.find(
            (t: Translation) => t.locale === lang
          );

          // Use helper function to get the full image URL, with fallback to static SVG
          const imageUrl =
            getImageUrl(f.featured_image) || `/home-feature${index + 1}.svg`;

          return (
            <div
              key={index}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <div className="w-[70px] h-[70px] relative">
                <Image
                  src={imageUrl}
                  alt={translation?.title || ""}
                  fill
                  className="object-cover"
                  unoptimized={imageUrl.startsWith("http")}
                />
              </div>
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
