"use client";
import Image from "next/image";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import Link from "next/link";
import useFields from "@/hooks/useFields";
import { useLang } from "@/context/LangContext";

interface Field {
  id: number;
  icon: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  "link-text": {
    ar: string;
    en: string;
  };
  href: string;
}

export default function Fields() {
  const { data, isLoading } = useFields();
  const { lang } = useLang();

  if (isLoading) {
    return <div> {lang === "ar" ? "جاري التحميل..." : "Loading..."}</div>;
  }

  return (
    <div
      className="py-10 px-5 bg-[linear-gradient(rgba(84,99,104,0.8),rgba(84,99,104,0.8)),url('/fields.png')]
 bg-no-repeat bg-cover bg-center"
    >
      <div className="max-w-[1233px] mx-auto w-full flex gap-8 flex-col overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-2 items-center">
          <div className="flex gap-4 lg:gap-2 flex-col text-white text-center lg:text-start">
            <div className="text-3xl lg:text-4xl font-bold ">
              {data.title[lang]}
            </div>
            <p className="text-lg">{data["sub-title"][lang]}</p>
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
            {data.fields.map((f: Field) => (
              <SwiperSlide key={f.id} className=" lg:!w-auto !h-auto">
                <div className="bg-primary-50 rounded-lg w-full lg:w-[380px] p-6 shadow-primary flex gap-[10px] flex-col h-full ">
                  {" "}
                  <div className="flex  items-center gap-2 pb-[11px] border-b border-b-shark-200 ">
                    <div className="h-[35px] w-[35px] bg-primary  rounded-lg flex justify-center items-center">
                      <Image
                        width={17}
                        height={17}
                        src={f.icon}
                        alt="field-icon"
                      />
                    </div>
                    <div className="text-lg">{f.title[lang]}</div>
                  </div>
                  <div>{f.description[lang]}</div>
                  <Link
                    className="border-2 rounded-lg py-2  text-sm text-center border-primary-950 mt-auto"
                    href={f.href}
                  >
                    {f["link-text"][lang]}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
