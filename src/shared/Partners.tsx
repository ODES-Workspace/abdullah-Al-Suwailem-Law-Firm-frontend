"use client";
import { useLang } from "@/context/LangContext";
import usePartners from "@/hooks/usePartners";
import Image from "next/image";
import React from "react";

type Partner = {
  id: number;
  icon: string;
};

export default function Partners() {
  const { data, isLoading } = usePartners();
  const { lang } = useLang();
  if (isLoading) {
    return <div>{lang === "ar" ? "جاري التحميل..." : "Loading..."}</div>;
  }
  return (
    <div className="py-10 lg:py-[90px] px-5 ">
      <div className="max-w-[1233px] mx-auto w-full gap-12 flex flex-col">
        <div className="text-3xl lg:text-5xl text-center font-bold text-primary-950 pb-[20px] border-b-2 border-primary-300 w-fit mx-auto">
          {data.title[lang]}
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-2 items-center ">
          {data.partners.map((p: Partner) => {
            return (
              <div
                key={p.id}
                className=" relative h-[60px] md:h-[200px] w-full"
              >
                <Image
                  src={p.icon}
                  alt={`Partner ${p.id}`}
                  className="h-full w-full"
                  fill
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
