import { useLang } from "@/context/LangContext";
import useMission from "@/hooks/useMission";
import useVission from "@/hooks/useVission";
import { Translation } from "@/lib";
import Image from "next/image";
import React from "react";

export default function Goals({ className }: { className?: string }) {
  const { data: mission, isLoading: missionLoading } = useMission();
  const { data: vission, isLoading: vissionLoading } = useVission();
  const { lang } = useLang();

  const missionText = mission?.translations.find(
    (t: Translation) => t.locale === lang
  );

  const vissionText = vission?.translations.find(
    (t: Translation) => t.locale === lang
  );

  if (missionLoading || vissionLoading) {
    return null;
  }

  return (
    <div className="px-5">
      <div className=" max-w-[1219px] mx-auto grid gap-4 lg:grid-cols-2  ">
        <div
          className={` ${className} flex flex-col lg:flex-row text-center lg:text-start  gap-4 items-center py-4 shadow-primary px-5 bg-white rounded-2xl `}
        >
          <div className="p-5 rounded-xl flex-shrink-0 bg-secondary">
            <Image
              src="/vission.svg"
              alt={vissionText?.title || ""}
              width={57}
              height={57}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">{vissionText?.title}</h2>
            <p className="text-sm">{vissionText?.description}</p>
          </div>
        </div>
        <div
          className={` ${className} flex flex-col lg:flex-row text-center lg:text-start gap-4 items-center py-4 shadow-primary px-5 bg-white rounded-2xl`}
        >
          <div className="p-5 rounded-xl flex-shrink-0 bg-secondary">
            <Image
              src="/mission.svg"
              alt={vissionText.title || ""}
              width={57}
              height={57}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">{missionText?.title}</h2>
            <p className="text-sm">{missionText?.description}</p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
