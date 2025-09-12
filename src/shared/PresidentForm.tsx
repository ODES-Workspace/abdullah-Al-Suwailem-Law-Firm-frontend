"use client";
import { getMetaTranslation } from "@/Helpers/getMetaTranslation";
import { getTranslation } from "@/Helpers/getTranslation";
import { usePresident } from "@/hooks";
import { useUpdatePost } from "@/hooks/usePost";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";

type FormValues = {
  title_ar: string;
  title_en: string;
  desc_ar: string;
  desc_en: string;
  role_ar: string;
  role_en: string;
  message_title_en: string;
  message_title_ar: string;
  message_second_ar: string;
  message_second_en: string;
  message_third_ar: string;
  message_third_en: string;
  message_first_ar: string;
  message_first_en: string;
};

export default function PresidentForm() {
  const { data } = usePresident();

  const { register, handleSubmit, reset } = useForm<FormValues>({});

  const { mutate, isPending } = useUpdatePost("president");

  useEffect(() => {
    if (data) {
      reset({
        title_ar: getTranslation(data.translations, "ar", "title"),
        title_en: getTranslation(data.translations, "en", "title"),
        desc_ar: getTranslation(data.translations, "ar", "description"),
        desc_en: getTranslation(data.translations, "en", "description"),
        role_ar: getMetaTranslation(data.metas, "role", "ar"),
        role_en: getMetaTranslation(data.metas, "role", "en"),
        message_title_en: getMetaTranslation(data.metas, "message-title", "en"),
        message_title_ar: getMetaTranslation(data.metas, "message-title", "ar"),
        message_first_ar: getMetaTranslation(data.metas, "message-first", "ar"),
        message_first_en: getMetaTranslation(data.metas, "message-first", "en"),
        message_second_ar: getMetaTranslation(
          data.metas,
          "message-second",
          "ar"
        ),
        message_second_en: getMetaTranslation(
          data.metas,
          "message-second",
          "en"
        ),
        message_third_ar: getMetaTranslation(data.metas, "message-third", "ar"),
        message_third_en: getMetaTranslation(data.metas, "message-third", "en"),
      });
    }
  }, [data, reset]);

  const onSubmit = (formData: FormValues) => {
    const payload = {
      id: data?.id,
      post_type: "president",
      slug: "president",
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
          meta_key: "role",

          translations: [
            {
              locale: "en",
              value: formData.role_en,
            },
            {
              locale: "ar",
              value: formData.role_ar,
            },
          ],
        },
        {
          meta_key: "message-title",

          translations: [
            {
              locale: "en",
              value: formData.message_title_en,
            },
            {
              locale: "ar",
              value: formData.message_title_ar,
            },
          ],
        },
        {
          meta_key: "message-first",

          translations: [
            {
              locale: "en",
              value: formData.message_first_en,
            },
            {
              locale: "ar",
              value: formData.message_first_ar,
            },
          ],
        },
        {
          meta_key: "message-second",

          translations: [
            {
              locale: "en",
              value: formData.message_second_en,
            },
            {
              locale: "ar",
              value: formData.message_second_ar,
            },
          ],
        },
        {
          meta_key: "message-third",

          translations: [
            {
              locale: "en",
              value: formData.message_third_en,
            },
            {
              locale: "ar",
              value: formData.message_third_ar,
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
        تعديل محتوى كلمة الرئيس
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-lg max-w-[1000px] grid-cols-2 grid gap-6"
      >
        {/*  */}

        <FormField
          register={register}
          name="desc_ar"
          label="العنوان الاول (AR)"
        />
        <FormField
          register={register}
          name="desc_en"
          label="العنوان الاول (EN)"
        />

        {/*  */}

        <FormField
          register={register}
          name="title_ar"
          label="العنوان الثاني (AR)"
        />

        <FormField
          register={register}
          name="title_en"
          label="العنوان الثاني (EN)"
        />

        {/*  */}
        <FormField
          register={register}
          name="role_ar"
          label="العنوان الثالث (AR)"
        />
        <FormField
          register={register}
          name="role_en"
          label="العنوان الثالث (EN)"
        />

        {/*  */}
        <FormField
          register={register}
          name="message_title_ar"
          label=" العنوان الرابع (AR)"
        />
        <FormField
          register={register}
          name="message_title_en"
          label=" العنوان الرابع (EN)"
        />
        {/*  */}
        <FormField
          register={register}
          name="message_first_ar"
          label=" الرسالة الاولي (AR)"
          as="textarea"
        />
        <FormField
          register={register}
          name="message_first_en"
          label=" الرسالة الاولي (EN)"
          as="textarea"
        />

        {/*  */}
        <FormField
          register={register}
          name="message_second_ar"
          label=" الرسالة الثانية (AR)"
          as="textarea"
        />
        <FormField
          register={register}
          name="message_second_en"
          label=" الرسالة الثانية (EN)"
          as="textarea"
        />

        {/*  */}
        <FormField
          register={register}
          name="message_third_ar"
          label=" الرسالة الثالثة (AR)"
          as="textarea"
        />
        <FormField
          register={register}
          name="message_third_en"
          label=" الرسالة الثالثة (EN)"
          as="textarea"
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
