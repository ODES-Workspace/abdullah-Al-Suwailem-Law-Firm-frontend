"use client";
import { useContextProvider } from "@/context/Context";
import { cn, Translation } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Loading from "./Loading";
import GetMetaText from "@/lib/getMetaText";
import { usePost } from "@/hooks/usePost";

export default function PresidentsMessage({
  borderBottom = true,
}: {
  borderBottom?: boolean;
}) {
  const { data, isLoading } = usePost("president");
  const { lang } = useContextProvider();

  const translation = data?.[0]?.translations?.find(
    (t: Translation) => t.locale === lang
  );
  const names = translation?.[0]?.title.split(" ");

  const role = GetMetaText("role", data?.[0]) || "";
  const messagetitle = GetMetaText("message-title", data?.[0]) || "";
  const messagefirst = GetMetaText("message-first", data?.[0]) || "";
  const messagesecond = GetMetaText("message-second", data?.[0]) || "";
  const messagethird = GetMetaText("message-third", data?.[0]) || "";

  if (isLoading) {
    return (
      <Loading>{lang === "ar" ? "جاري التحميل..." : "Loading..."}</Loading>
    );
  }
  return (
    <div
      className={cn(
        " pb-8 px-5 border-b-[10px] border-primary-700 ",
        borderBottom
          ? "border-b-[10px] pt-8 lg:pt-50 bg-neutral-200"
          : "border-b-0 pt-8 bg-white"
      )}
    >
      <div className="max-w-[1233px] mx-auto flex  flex-col lg:flex-row gap-6 items-center lg:items-start">
        <div className="flex flex-col gap-3">
          <div className="bg-primary py-2 px-6 font-semibold rounded-lg w-fit flex gap-[10px]">
            <Image
              src="/president-title.svg"
              width={16}
              height={16}
              alt="president-title-icon"
            />
            {translation?.description}
            <Image
              src="/president-title.svg"
              width={16}
              height={16}
              alt="president-title-icon"
            />
          </div>

          <div className="gap-1 flex flex-col ">
            <div className=" text-3xl md:text-4xl lg:text-5xl leading-[60px] font-bold gap-2 flex">
              {names?.map((n: string, index: number) => (
                <span
                  key={index}
                  className={`${index === 0 ? "text-black" : "text-primary"}`}
                >
                  {n}
                </span>
              ))}
            </div>
            <div className="text-lg font-extrabold relative w-fit">
              <div className="relative z-1">{role}</div>
              <Image
                src={"/line.svg"}
                width={141}
                height={14}
                alt="line"
                className={`top-[5px] absolute ${
                  lang === "ar" ? "left-0" : "right-0 rotate-180"
                } `}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 text-justify">
            <div>{messagetitle}</div>
            <div>{messagefirst}</div>
            <div>{messagesecond}</div>
            <div>{messagethird}</div>
          </div>

          <Link
            href={data?.[0]?.slug}
            className="bg-primary max-w-[230px] w-full py-3 text-center flex justify-center rounded-3xl underline text-white"
          >
            {lang === "ar" ? "اقرأ المزيد" : "Read More"}
          </Link>
        </div>

        <Image
          src={"/president.svg"}
          height={521}
          width={506}
          alt={messagetitle}
        />
      </div>
    </div>
  );
}
