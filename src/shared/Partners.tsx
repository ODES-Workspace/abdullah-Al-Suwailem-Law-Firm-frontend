"use client";
import { useContextProvider } from "@/context/Context";
import Image from "next/image";
import React from "react";

const DATA = {
  title: { en: "Our Partners", ar: "شركاؤنا" },
  partners: [
    { id: 1, icon: "/partner1.svg" },
    { id: 2, icon: "/partner2.svg" },
    { id: 3, icon: "/partner3.svg" },
    { id: 4, icon: "/partner4.svg" },
    { id: 5, icon: "/partner5.svg" },
  ],
};
export default function Partners() {
  const { lang } = useContextProvider();

  return (
    <div className="py-10 lg:py-[90px] px-5 ">
      <div className="max-w-[1233px] mx-auto w-full gap-12 flex flex-col">
        <div className="text-3xl lg:text-5xl text-center font-bold text-primary-950 pb-[20px] border-b-2 border-primary-300 w-fit mx-auto">
          {DATA.title[lang]}
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-2 items-center ">
          {DATA.partners.map((p) => {
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
