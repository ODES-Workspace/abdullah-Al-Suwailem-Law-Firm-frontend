import React from "react";
import Input from "./Input";
import Select from "./Select";
import useServices from "@/hooks/useServices";
import { useContextProvider } from "@/context/Context";
import { Item, Translation } from "@/lib";

export default function ConsultationForm() {
  const { data } = useServices();
  const { lang, handleModelDisplay } = useContextProvider();

  const serviceOptions = data?.map((service: Item) => {
    const translation = service.translations.find(
      (t: Translation) => t.locale === lang
    );
    return {
      value: service.id,
      label: translation ? translation.title : service.id,
    };
  });

  return (
    <form className="py-8 px-12 max-w-[870px] w-full  bg-white rounded-2xl flex flex-col gap-6">
      <h2 className="text-4xl  mb-4 text-center text-primary font-bold ">
        اطلب استشارتك الآن
      </h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="">الإسم *</label>
          <Input />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">البريد الإلكتروني*</label>
          <Input />
        </div>
        <div className="flex flex-col gap-2">
          <label>رقم الجوال*</label>
          <Input />
        </div>
        <div className="flex flex-col gap-2">
          <label>الخدمة*</label>
          <Select
            options={serviceOptions}
            onChange={() => {}}
            value=""
            variant="secondary"
            placeholder="إختر الخدمة"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <label>رسالة (اختياري)</label>
          <textarea className="border border-primary rounded-2xl h-[166px] w-full" />
        </div>
        <div className="col-span-2 flex justify-center ">
          <button
            className="bg-primary py-3 text-white max-w-[300px] w-full rounded-2xl cursor-pointer"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleModelDisplay();
            }}
          >
            حدد الموعد
          </button>
        </div>
      </div>
    </form>
  );
}
