"use client";
import { useContextProvider } from "@/context/Context";
import Image from "next/image";
import React from "react";
import Loading from "./Loading";
import { Item } from "@/lib";
import { getImageUrl } from "@/Helpers/getImageUrl";
import { usePost } from "@/hooks/usePost";

export default function Partners() {
  const { lang } = useContextProvider();

  const { data, isLoading } = usePost("partners");

  if (isLoading) {
    return <Loading>جاري التحميل...</Loading>;
  }

  if (!data) {
    return;
  }

  return (
    <div className="py-10 lg:py-[90px] px-5 ">
      <div className="max-w-[1233px] mx-auto w-full gap-12 flex flex-col">
        <div className="text-3xl lg:text-5xl text-center font-bold text-primary-950 pb-[20px] border-b-2 border-primary-300 w-fit mx-auto">
          {lang === "ar" ? "شركاؤنا" : "Our Partners"}
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-3 items-center flex-wrap  ">
          {data.map((p: Item) => {
            return (
              <div key={p.id}>
                <Image
                  src={getImageUrl(p.featured_image)}
                  alt={`Partner ${p.id}`}
                  height={60}
                  width={200}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
