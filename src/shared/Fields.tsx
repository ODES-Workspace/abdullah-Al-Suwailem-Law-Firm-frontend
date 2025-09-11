"use client";
import Image from "next/image";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import Link from "next/link";
import useFields from "@/hooks/useFields";
import { useContextProvider } from "@/context/Context";
import Loading from "./Loading";
import { Item, Translation } from "@/lib";

const text = {
  ar: {
    title: "مجالات شركة فهد السويلم",
    description:
      "خبرة واسعة في مختلف فروع القانون مع سجل حافل من القضايا الناجحة",
    linkText: "عرض المزيد",
  },

  en: {
    title: "Fahad Al Suwailem Company Fields",
    description:
      "Extensive experience in various branches of law with a proven track record of successful cases",
    linkText: "View More",
  },
};

export default function Fields() {
  const { data, isLoading } = useFields();
  const { lang } = useContextProvider();

  if (isLoading) {
    return (
      <Loading> {lang === "ar" ? "جاري التحميل..." : "Loading..."}</Loading>
    );
  }

  return (
    <div
      id="fields"
      className="py-10 px-5 bg-[linear-gradient(rgba(84,99,104,0.8),rgba(84,99,104,0.8)),url('/fields.png')]
 bg-no-repeat bg-cover bg-center"
    >
      <div className="max-w-[1233px] mx-auto w-full flex gap-8 flex-col overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-2 items-center">
          <div className="flex gap-4 lg:gap-2 flex-col text-white text-center lg:text-start">
            <div className="text-3xl lg:text-4xl font-bold ">
              {text[lang].title}
            </div>
            <p className="text-lg"> {text[lang].description}</p>
          </div>
          <div className="flex gap-6">
            <div className="p-3 flex border border-white rounded-xl cursor-pointer swiper-button-prev-custom ">
              <Image
                width={24}
                height={24}
                src="/slider-arrow-r.svg"
                alt="field-arrow-icon"
              />
            </div>
            <div className="p-3 flex border border-white rounded-xl cursor-pointer swiper-button-next-custom ">
              <Image
                width={24}
                height={24}
                src="/slider-arrow-l.svg"
                alt="field-arrow-icon"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            dir="rtl"
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            spaceBetween={20}
            slidesPerView={4}
            speed={1000}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {data.map((f: Item, index: number) => {
              const translation = f?.translations.find(
                (t: Translation) => t.locale === lang
              );
              return (
                <SwiperSlide key={f.id} className=" lg:!w-auto !h-auto">
                  <div className="bg-primary-50 rounded-lg w-full lg:w-[380px] p-6 shadow-primary flex gap-[10px] flex-col h-full ">
                    {" "}
                    <div className="flex  items-center gap-2 pb-[11px] border-b border-b-shark-200 ">
                      <div className="h-[35px] w-[35px] bg-primary  rounded-lg flex justify-center items-center">
                        <Image
                          width={17}
                          height={17}
                          src={`/field${index + 1}.svg`}
                          alt="field-icon"
                        />
                      </div>
                      <div className="text-lg">{translation?.title}</div>
                    </div>
                    <div>{translation?.description}</div>
                    <Link
                      className="border-2 rounded-lg py-2  text-sm text-center border-primary-950 mt-auto"
                      href={"/fields"}
                    >
                      {text[lang].linkText}
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
