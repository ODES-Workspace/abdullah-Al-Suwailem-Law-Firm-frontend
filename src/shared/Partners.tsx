"use client";
import { useContextProvider } from "@/context/Context";
import Image from "next/image";
import React from "react";
import Loading from "./Loading";
import { Item } from "@/lib";
import { getImageUrl } from "@/Helpers/getImageUrl";
import { usePost } from "@/hooks/usePost";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={134}
            slidesPerView={1}
            speed={1000}
            className="flex justify-center items-center"
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 100,
              },
            }}
          >
            {data?.map((p: Item) => {
              return (
                <SwiperSlide
                  key={p.id}
                  className="!flex justify-center items-center"
                >
                  <div className="max-w-[200px] w-full h-[100px] relative">
                    <Image
                      src={getImageUrl(p.featured_image)}
                      alt={`Partner ${p.id}`}
                      fill
                      className="object-contain"
                    />
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
