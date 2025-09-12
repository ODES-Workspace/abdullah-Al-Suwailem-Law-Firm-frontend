"use client";
import { getMetaTranslation } from "@/Helpers/getMetaTranslation";
import { getTranslation } from "@/Helpers/getTranslation";
import { useHomeHero } from "@/hooks";
import { useUpdatePost } from "@/hooks/usePost";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";

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

  const { mutate, isPending } = useUpdatePost("hero");

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
        <FormField register={register} name="title_ar" label="العنوان  (AR)" />
        <FormField register={register} name="title_en" label="العنوان  (EN)" />
        <FormField
          register={register}
          as="textarea"
          name="desc_ar"
          label="الوصف  (AR)"
        />
        <FormField
          register={register}
          as="textarea"
          name="desc_en"
          label="الوصف  (EN)"
        />
        <FormField
          register={register}
          as="textarea"
          name="btn_ar"
          label="     نص الزر (AR)"
        />{" "}
        <FormField
          register={register}
          as="textarea"
          name="btn_en"
          label="     نص الزر (EN)"
        />
        <div className="col-span-2 flex justify-end ">
          <button className="bg-primary text-white py-2 px-10 rounded-4xl cursor-pointer">
            {isPending ? "جاري الحفظ..." : " حفظ التغييرات "}
          </button>
        </div>
      </form>
    </div>
  );
}
