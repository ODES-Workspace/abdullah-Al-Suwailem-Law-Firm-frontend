"use client";
import { useLang } from "@/context/LangContext";
import useHomeServices from "@/hooks/useHomeServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Service = {
  id: number;
  icon: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
};

export default function HomeServices() {
  const { isLoading, data } = useHomeServices();
  const { lang } = useLang();

  if (isLoading) {
    return <div>{lang === "ar" ? "جاري التحميل..." : "Loading..."}</div>;
  }
  return (
    <div className="py-10 px-5">
      <div className="max-w-[1233px] mx-auto w-full flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row text-center lg:text-start justify-between gap-2 items-center">
          <div className="flex  flex-col gap-5 ">
            <h3 className=" text-3xl lg:text-5xl font-bold">
              {data?.title[lang]}
            </h3>
            <p className="text-lg text-grey-700">{data["sub-title"][lang]}</p>
          </div>

          <Link
            href={data.link.href}
            className="text-primary-700 text-2xl font-extrabold underline"
          >
            {data.link.text[lang]}
          </Link>
        </div>
        <div className="grid mdgrid-cols-2 lg:grid-cols-3 gap-6">
          {data.services.map((s: Service) => {
            return (
              <div
                key={s.id}
                className="bg-primary py-3 px-5 relative flex flex-col gap-3  rounded-2xl shadow-primary lg:hover:rounded-bl-none lg:hover:rounded-br-none group cursor-pointer transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 ">
                    <div className="p-1 bg-neutral-100/25 rounded-lg">
                      <Image src={s.icon} alt="test" width={32} height={32} />
                    </div>
                    <div className="text-white text-lg">{s.title[lang]}</div>
                  </div>
                  <Image
                    src="/arrow.svg"
                    alt="test"
                    width={33}
                    height={19}
                    className="transition-all duration-300 group-hover:rotate-180"
                  />
                </div>
                <div className="flex lg:absolute shadow-primary  gap-5 flex-col rounded-xl lg:roundex-none z-5 w-full top-full left-0 rounded-br-2xl rounded-bl-2xl bg-white  py-3 px-5  lg:h-[333px]  justify-between  lg:opacity-0 lg:hidden group-hover:lg:flex  group-hover:opacity-100 transition-all duration-300">
                  <div>{s.description[lang]}</div>
                  <div className="border-primary-950 text-primary-950 text-sm border-2 w-full py-3 text-center rounded-lg">
                    {lang === "ar" ? "اطلب استشارة" : "Request Consultation"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
