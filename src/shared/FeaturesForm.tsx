"use client";
import { getTranslation } from "@/app/Helpers/getTranslation";
import { useUpdatePost } from "@/hooks/usePost";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { useFeatures } from "@/hooks";
import { Item } from "@/lib";
import Select from "./Select";

type FormValues = {
  title_ar: string;
  title_en: string;
};

export default function FeaturesForm() {
  const { data } = useFeatures();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const options =
    data?.map((feature: Item) => ({
      value: feature.id?.toString() || "",
      label:
        getTranslation(feature.translations, "ar", "title") || feature.title,
    })) || [];

  useEffect(() => {
    if (data && data.length > 0 && selectedId === null) {
      setSelectedId(data[0].id || 0);
    }
  }, [data, selectedId]);

  const { register, handleSubmit, reset } = useForm<FormValues>({});

  const { mutate, isPending } = useUpdatePost();

  const selectedItem = data?.find((f: Item) => f.id === selectedId);

  useEffect(() => {
    if (selectedItem) {
      reset({
        title_ar:
          getTranslation(selectedItem.translations, "ar", "title") || "",
        title_en:
          getTranslation(selectedItem.translations, "en", "title") || "",
      });
    }
  }, [selectedItem, reset]);

  const onSubmit = (formData: FormValues) => {
    if (!selectedItem) return;

    const payload = {
      id: selectedItem.id,
      post_type: selectedItem.post_type,
      slug: `${selectedItem.post_type}-${selectedItem.id}`,
      is_active: 1,
      translations: [
        {
          locale: "ar",
          title: formData.title_ar,
        },
        {
          locale: "en",
          title: formData.title_en,
        },
      ],
    };

    mutate(payload);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-6">
        تعديل محتوى المميزات
      </h1>
      <div className="mb-6 max-w-[1000px]">
        <Select
          options={options}
          value={selectedId ? selectedId.toString() : ""}
          onChange={(value) => setSelectedId(value ? Number(value) : null)}
          placeholder="اختر ميزة"
        />
      </div>
      {selectedItem && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-lg max-w-[1000px] grid-cols-2 grid gap-6"
        >
          <FormField
            register={register}
            name="title_ar"
            label="العنوان  (AR)"
          />
          <FormField
            register={register}
            name="title_en"
            label="العنوان  (EN)"
          />

          <div className="col-span-2 flex justify-end ">
            <button
              type="submit"
              disabled={isPending}
              className="bg-primary text-white py-2 px-10 rounded-4xl cursor-pointer"
            >
              {isPending ? "جاري الحفظ..." : " حفظ التغييرات "}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
