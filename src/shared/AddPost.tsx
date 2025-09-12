"use client";

import { useAddPost } from "@/hooks/usePost";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { Item } from "@/lib";
import Image from "next/image";

type FormValues = {
  title_ar: string;
  title_en: string;
  desc_ar: string;
  desc_en: string;
  featured_image: string;
};

export default function AddPost({
  type,
  image = true,
  title = true,
  desc = true,
}: {
  type: string;
  image?: boolean;
  title?: boolean;
  desc?: boolean;
}) {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [hasNewImage, setHasNewImage] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({});

  const { mutate, isPending } = useAddPost(type);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;
        setValue("featured_image", base64String);
        setImagePreview(base64String);
        setHasNewImage(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (formData: FormValues) => {
    const payload: Item = {
      post_type: type,
      slug: type,
      is_active: 1,
      translations: [
        {
          locale: "ar",
          description: formData.desc_ar || `${type}`,
          title: formData.title_ar || `${type}`,
        },
        {
          locale: "en",
          description: formData.desc_en || `${type}`,
          title: formData.title_en || `${type}`,
        },
      ],
    };

    if (hasNewImage && formData.featured_image) {
      payload.featured_image = formData.featured_image;
    }

    mutate(payload, {
      onSuccess: () => {
        reset();
        setImagePreview("");
        setHasNewImage(false);
        // Reset the file input
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      },
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-6">اضافة محتوى</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-lg max-w-[1000px] flex flex-col lg:grid-cols-2 lg:grid gap-6"
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
              label="الوصف (AR)"
              as="textarea"
            />
            <FormField
              register={register}
              name="desc_en"
              label="الوصف (EN)"
              as="textarea"
            />{" "}
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
            {/* Hidden input for react-hook-form validation */}
            <input
              type="hidden"
              {...register("featured_image", {
                required: "الصورة المميزة مطلوبة",
              })}
            />
            {errors.featured_image && (
              <span className="text-red-500 text-sm">
                {errors.featured_image.message}
              </span>
            )}
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
        <div className="col-span-2 flex justify-end ">
          <button
            type="submit"
            disabled={isPending}
            className="bg-primary text-white py-2 px-10 rounded-4xl cursor-pointer"
          >
            {isPending ? "جاري الاضافة..." : " اضافة "}
          </button>
        </div>
      </form>
    </div>
  );
}
