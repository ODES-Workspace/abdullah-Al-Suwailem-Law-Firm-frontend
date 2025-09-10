"use client";
import { useLang } from "@/context/LangContext";
import usePresident from "@/hooks/usePresident";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PresidentsMessage() {
  const { data, isLoading } = usePresident();
  const { lang } = useLang();
  const names = data?.content[lang].name.split(" ");

  if (isLoading) {
    return <div>{lang === "ar" ? "جاري التحميل..." : "Loading..."}</div>;
  }
  return (
    <div className="pt-50 pb-8 px-5 border-b-[10px] border-primary-700 bg-neutral-200">
      <div className="max-w-[1233px] mx-auto flex gap-6">
        <div className="flex flex-col gap-3">
          <div className="bg-primary py-2 px-6 font-semibold rounded-lg w-fit flex gap-[10px]">
            <Image
              src="/president-title.svg"
              width={16}
              height={16}
              alt="president-title-icon"
            />
            {data.content[lang]["sub-title"]}
            <Image
              src="/president-title.svg"
              width={16}
              height={16}
              alt="president-title-icon"
            />
          </div>

          <div className="gap-1 flex flex-col ">
            <div className="text-5xl leading-[60px] font-bold gap-2 flex">
              {names.map((n: string, index: number) => (
                <span
                  key={index}
                  className={`${index === 0 ? "text-black" : "text-primary"}`}
                >
                  {n}
                </span>
              ))}
            </div>
            <div className="text-lg font-extrabold relative w-fit">
              {data.content[lang].role}
              <Image
                src={"/line.svg"}
                width={141}
                height={14}
                alt="line"
                className={`top-[5px] absolute -z-1 ${
                  lang === "ar" ? "left-0" : "right-0 rotate-180"
                } `}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>{data.content[lang]["message-title"]}</div>
            <div>{data.content[lang]["message-first"]}</div>
            <div>{data.content[lang]["message-second"]}</div>
            <div>{data.content[lang]["message-third"]}</div>
          </div>

          <Link
            href={data.link}
            className="bg-primary max-w-[230px] w-full py-3 text-center flex justify-center rounded-3xl underline text-white"
          >
            {lang === "ar" ? "اقرأ المزيد" : "Read More"}
          </Link>
        </div>

        <Image
          src={data.image}
          height={521}
          width={506}
          alt={data.content[lang]["sub-title"]}
        />
      </div>
    </div>
  );
}
