"use client";
import { useContextProvider } from "@/context/Context";
import { Goals, PresidentsMessage } from "@/shared";
import React from "react";
const DATA = {
  title: {
    en: "About Us",
    ar: "من نحن",
  },

  description: {
    en: " Learn more about the mission, vision, and values at Fahad Al Suwailem Law Firm & Legal Consultancy. We believe that justice and transparency are the foundation of any solid legal relationship. Our firm was established to be a trusted partner providing comprehensive legal services that meet the needs of both individuals and businesses, with full commitment to professional and ethical standards.",
    ar: "تعرف على المزيد حول مهمة ورؤية وقيم في شركة فهد السويلم للمحاماة والاستشارات القانونية، نؤمن بأن العدالة والشفافية هما أساس نجاح أي علاقة قانونية راسخة. تأسست شركتنا لتكون شريكًا موثوقًا يقدم خدمات قانونية متكاملة تلبي احتياجات الأفراد والشركات على حد سواء، مع الالتزام التام بالمعايير المهنية والأخلاقية",
  },
  moreDescription: {
    en: " Learn more about the mission, vision, and values at Fahad Al Suwailem Law Firm & Legal Consultancy. We believe that justice and transparency are the foundation of any solid legal relationship. Our firm was established to be a trusted partner providing comprehensive legal services that meet the needs of both individuals and businesses, with full commitment to professional and ethical standards.",
    ar: "في شركة فهد السويلم للمحاماة والاستشارات القانونية، نؤمن بأن العدالة والشفافية هما أساس نجاح أي علاقة قانونية راسخة. تأسست شركتنا لتكون شريكًا موثوقًا يقدم خدمات قانونية متكاملة تلبي احتياجات الأفراد والشركات على حد سواء، مع الالتزام التام بالمعايير المهنية والأخلاقية.",
  },
};

export default function Page() {
  const { lang } = useContextProvider();

  return (
    <>
      <div className="bg-[url('/hero.svg')]  md:h-[300px] lg:h-[600px] bg-no-repeat bg-center bg-cover relative">
        <div className="pt-30 lg:pt-50 pb-20 lg:pb-30 px-5  h-full flex items-center">
          <div className="max-w-[1233px] mx-auto w-full flex justify-center items-center h-full text-3xl lg:text-5xl font-bold text-white text-center">
            {DATA.title[lang]}
          </div>
        </div>
      </div>
      <div className="py-10 pb-10 lg:py-8 lg:pb-20 px-5">
        <div className="max-w-[1233px] mx-auto text-2xl w-full flex gap-2 flex-col">
          <p>{DATA.description[lang]}</p>
          <p>{DATA.moreDescription[lang]}</p>
        </div>
      </div>
      <PresidentsMessage borderBottom={false} />
      <div className="py-20">
        <Goals className={"!bg-primary-500"} />
      </div>
    </>
  );
}
