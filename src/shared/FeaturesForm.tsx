"use client";
import { getTranslation } from "@/Helpers/getTranslation";
import { getImageUrl } from "@/Helpers/getImageUrl";
import { useUpdatePost } from "@/hooks/usePost";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { useFeatures } from "@/hooks";
import { Item } from "@/lib";
import Select from "./Select";
import Image from "next/image";

type FormValues = {
  title_ar: string;
  title_en: string;
  featured_image?: string;
};

export default function FeaturesForm() {
  const { data } = useFeatures();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

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

  const { register, handleSubmit, reset, setValue } = useForm<FormValues>({});

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
      // Use helper function to get the full image URL
      setImagePreview(getImageUrl(selectedItem.featured_image));
    }
  }, [selectedItem, reset]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;
        setValue("featured_image", base64String);
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (formData: FormValues) => {
    if (!selectedItem) return;

    const payload = {
      id: selectedItem.id,
      post_type: selectedItem.post_type,
      slug: `${selectedItem.post_type}-${selectedItem.id}`,
      featured_image: formData.featured_image || null,
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
          height="!h-[120px]"
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
          {/* Image Upload */}
          <div className="col-span-2 flex flex-col gap-2">
            <label className="text-primary font-bold">الصورة المميزة</label>
            <input
              type="file"
              accept="image/png"
              onChange={handleImageChange}
              className="border p-2 border-primary rounded-xl"
            />
            {imagePreview && (
              <div className="mt-2">
                <Image
                  width={100}
                  height={100}
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-xl border border-primary"
                  // Add unoptimized prop for external URLs
                  unoptimized={imagePreview.startsWith("http")}
                />
              </div>
            )}
          </div>
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
