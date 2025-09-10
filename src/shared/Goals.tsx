import { useLang } from "@/context/LangContext";
import useGoals from "@/hooks/useGoals";
import Image from "next/image";
import React from "react";

export default function Goals() {
  const { data, isLoading } = useGoals();
  const { lang } = useLang();
  const isArabic = lang === "ar";

  if (isLoading) {
    return <div> {isArabic ? "جاري التحميل..." : "Loading..."}</div>;
  }

  return (
    <div className="px-5">
      <div className=" max-w-[1219px] mx-auto grid gap-4 grid-cols-2  ">
        <div className="flex gap-4 items-center py-4 shadow-primary px-5 bg-white rounded-2xl">
          <div className="p-5 rounded-xl flex-shrink-0 bg-secondary">
            <Image
              src={data.vission.icon}
              alt={data?.vission?.[lang]?.title || ""}
              width={57}
              height={57}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">{data?.vission[lang].title}</h2>
            <p className="text-sm">{data?.vission[lang].description}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center py-4 shadow-primary px-5 bg-white rounded-2xl">
          <div className="p-5 rounded-xl flex-shrink-0 bg-secondary">
            <Image
              src={data.mission.icon}
              alt={data?.mission?.[lang]?.title || ""}
              width={57}
              height={57}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">{data?.mission[lang].title}</h2>
            <p className="text-sm">{data?.mission[lang].description}</p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
