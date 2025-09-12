import { useContextProvider } from "@/context/Context";
import { getImageUrl } from "@/Helpers/getImageUrl";
import useMission from "@/hooks/useMission";
import useVission from "@/hooks/useVission";
import { Translation } from "@/lib";
import Image from "next/image";
import React from "react";

export default function Goals({ className }: { className?: string }) {
  const { data: mission, isLoading: missionLoading } = useMission();
  const { data: vission, isLoading: vissionLoading } = useVission();
  const { lang } = useContextProvider();

  const missionText = mission?.[0]?.translations?.find(
    (t: Translation) => t.locale === lang
  );

  const vissionText = vission?.[0]?.translations?.find(
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
          <div className="w-[95px] h-[95px] rounded-xl flex-shrink-0 bg-secondary flex justify-center items-center">
            <Image
              src={getImageUrl(vission?.[0]?.featured_image)}
              alt={vissionText?.title || ""}
              width={50}
              height={50}
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
          <div className="w-[95px] h-[95px] rounded-xl flex-shrink-0 bg-secondary flex justify-center items-center">
            <Image
              src={getImageUrl(mission?.[0]?.featured_image)}
              alt={vissionText?.title || ""}
              width={30}
              height={50}
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
