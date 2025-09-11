"use client";
import { getMetaTranslation } from "@/app/Helpers/getMetaTranslation";
import { getTranslation } from "@/app/Helpers/getTranslation";
import { useHomeHero } from "@/hooks";
import { useUpdatePost } from "@/hooks/usePost";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  title_ar: string;
  title_en: string;
  desc_ar: string;
  desc_en: string;
  btn_ar: string;
  btn_en: string;
};

export default function HeroForm() {
  const { data } = useHomeHero();

  const { register, handleSubmit, reset } = useForm<FormValues>({});

  const { mutate, isPending } = useUpdatePost();

  useEffect(() => {
    if (data) {
      reset({
        title_ar: getTranslation(data.translations, "ar", "title"),
        title_en: getTranslation(data.translations, "en", "title"),
        desc_ar: getTranslation(data.translations, "ar", "description"),
        desc_en: getTranslation(data.translations, "en", "description"),
        btn_ar: getMetaTranslation(data.metas, "buttonText", "ar"),
        btn_en: getMetaTranslation(data.metas, "buttonText", "en"),
      });
    }
  }, [data, reset]);

  const onSubmit = (formData: FormValues) => {
    console.log(formData);
    const payload = {
      id: data?.id,
      post_type: "hero",
      slug: "hero-section",
      is_active: 1,
      translations: [
        {
          locale: "ar",
          title: formData.title_ar,
          description: formData.desc_ar,
        },
        {
          locale: "en",
          title: formData.title_en,
          description: formData.desc_en,
        },
      ],
      post_meta: [
        {
          meta_key: "buttonText",

          translations: [
            {
              locale: "en",
              value: formData.btn_en,
            },
            {
              locale: "ar",
              value: formData.btn_ar,
            },
          ],
        },
      ],
    };

    mutate(payload);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-6">
        تعديل محتوى القسم الرئيسي
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-lg max-w-[1000px] grid-cols-2 grid gap-6"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-primary font-bold">
            العنوان (AR)
          </label>
          <textarea
            className=" h-[150px] border p-2 border-primary rounded-xl"
            {...register("title_ar", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-primary font-bold">
            العنوان (EN)
          </label>
          <textarea
            className=" h-[150px] border p-2 border-primary rounded-xl"
            {...register("title_en", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-primary font-bold">
            الوصف (AR)
          </label>
          <textarea
            className=" h-[150px] border p-2 border-primary rounded-xl"
            {...register("desc_ar", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-primary font-bold">
            الوصف (EN)
          </label>
          <textarea
            className=" h-[150px] border p-2 border-primary rounded-xl"
            {...register("desc_en", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-primary font-bold">
            نص الزر (AR)
          </label>
          <textarea
            className=" h-[150px] border p-2 border-primary rounded-xl"
            {...register("btn_ar", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-primary font-bold">
            نص الزر (EN)
          </label>
          <textarea
            className=" h-[150px] border p-2 border-primary rounded-xl"
            {...register("btn_en", { required: true })}
          />
        </div>

        <div className="col-span-2 flex justify-end ">
          <button className="bg-primary text-white py-2 px-10 rounded-4xl cursor-pointer">
            {isPending ? "جاري الحفظ..." : " حفظ التغييرات "}
          </button>
        </div>
      </form>
    </div>
  );
}
