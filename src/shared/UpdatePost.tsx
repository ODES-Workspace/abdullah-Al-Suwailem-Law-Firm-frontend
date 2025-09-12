"use client";
import { getTranslation } from "@/Helpers/getTranslation";
import { getImageUrl } from "@/Helpers/getImageUrl";
import { useDeletePost, useUpdatePost } from "@/hooks/usePost";
import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { Item } from "@/lib";
import Select from "./Select";
import Image from "next/image";

type FormValues = {
  title_ar: string;
  title_en: string;
  desc_ar: string;
  desc_en: string;
  featured_image?: string;
};

type UpdatePostProps = {
  type: string;
  data?: Item[];
  image?: boolean;
  title?: boolean;
  desc?: boolean;
  label?: string;
  remove?: boolean;
};

export default function UpdatePost({
  type,
  data: propData,
  image = true,
  title = true,
  desc = true,
  label = "العنصر",
  remove = true,
}: UpdatePostProps) {
  const data = propData;
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [hasNewImage, setHasNewImage] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const options =
    data?.map((feature: Item) => ({
      value: feature.id?.toString() || "",
      label:
        getTranslation(feature.translations, "ar", "title") ||
        feature.title ||
        "بدون عنوان",
    })) || [];

  useEffect(() => {
    if (data && data.length > 0 && selectedId === null) {
      setSelectedId(data[0].id || 0);
    }
  }, [data, selectedId]);

  const { register, handleSubmit, reset, setValue } = useForm<FormValues>({});

  const { mutate, isPending } = useUpdatePost(type);

  const { mutate: deletePost } = useDeletePost(type);

  function handleDelete() {
    if (selectedId && selectedItem && data) {
      deletePost(selectedId);
      setSelectedId(data[0].id || 0);
    }
  }

  const selectedItem = data?.find((f: Item) => f.id === selectedId);

  useEffect(() => {
    if (selectedItem) {
      reset({
        title_ar:
          getTranslation(selectedItem.translations, "ar", "title") || "",
        title_en:
          getTranslation(selectedItem.translations, "en", "title") || "",
        desc_ar:
          getTranslation(selectedItem.translations, "ar", "description") || "",
        desc_en:
          getTranslation(selectedItem.translations, "en", "description") || "",
      });
      setImagePreview(getImageUrl(selectedItem.featured_image));
      setHasNewImage(false);

      // Reset the file input when selection changes
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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
        setHasNewImage(true); // Mark that a new image has been selected
      };
      reader.readAsDataURL(file);
    }
  };

  if (!data || data.length === 0) {
    return <div>لا يوجد {label} للتعديل.</div>;
  }

  const onSubmit = (formData: FormValues) => {
    if (!selectedItem) return;

    const payload: Item = {
      id: selectedItem.id,
      post_type: selectedItem.post_type,
      slug: `${selectedItem.post_type}-${selectedItem.id}`,
      is_active: 1,
      translations: [
        {
          locale: "ar",
          description: formData.desc_ar,
          title: formData.title_ar,
        },
        {
          locale: "en",
          description: formData.desc_en,
          title: formData.title_en,
        },
      ],
    };

    if (hasNewImage && formData.featured_image) {
      payload.featured_image = formData.featured_image;
    }

    mutate(payload);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-6">
        تعديل محتوى {label}
      </h1>
      <div className="mb-6 max-w-[1000px]">
        {data.length > 1 && (
          <Select
            options={options}
            value={selectedId ? selectedId.toString() : ""}
            onChange={(value) => setSelectedId(value ? Number(value) : null)}
            placeholder={`اختر ${
              type === "services"
                ? "خدمة"
                : type === "features"
                ? "ميزة"
                : "عنصر"
            }`}
            height="!h-[120px]"
          />
        )}
      </div>
      {selectedItem && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-lg max-w-[1000px] grid-cols-2 grid gap-6"
        >
          {title && (
            <>
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
            </>
          )}
          {desc && (
            <>
              <FormField
                register={register}
                name="desc_ar"
                label="الوصف (AR)
"
                as="textarea"
              />
              <FormField
                register={register}
                name="desc_en"
                label="الوصف (EN)"
                as="textarea"
              />
            </>
          )}
          {/* Image Upload */}
          {image && (
            <div className="col-span-2 flex flex-col gap-2">
              <label className="text-primary font-bold">الصورة المميزة</label>
              <input
                ref={fileInputRef}
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
                    className="w-32 h-32 p-2 object-contain rounded-xl border border-primary"
                    unoptimized={imagePreview.startsWith("http")}
                  />
                </div>
              )}
            </div>
          )}
          <div className="col-span-2 flex gap-4 items-center justify-end">
            {remove && (
              <button
                type="button"
                onClick={handleDelete}
                className="bg-red-500 text-white py-2 px-10 rounded-4xl cursor-pointer"
              >
                حذف{" "}
                {type === "services"
                  ? "الخدمة"
                  : type === "features"
                  ? "الميزة"
                  : "العنصر"}
              </button>
            )}
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
