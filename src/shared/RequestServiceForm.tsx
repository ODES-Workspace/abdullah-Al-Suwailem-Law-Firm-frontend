"use client";
import { useContextProvider } from "@/context/Context";
import Image from "next/image";
import React from "react";
import FloatLabelInput from "./FloatLabelInput";
import { useForm } from "react-hook-form";

export default function RequestServiceForm() {
  const { lang } = useContextProvider();

  type FormValues = {
    name: string;
    email: string;
    phone: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="py-10 lg:py-30 pb-5 px-5 bg-[linear-gradient(rgba(243,244,246,0.9),rgba(243,244,246,0.9)),url('/req-form.png')]  bg-cover bg-no-repeat bg-center">
      <div className="max-w-[1233px] mx-auto flex flex-col gap-[54px] ">
        <div className="flex justify-center items-center gap-3 flex-col w-full text-center">
          <div className="flex gap-2" dir="rtl">
            <Image
              src="/line3.svg"
              alt="logo"
              width={100}
              height={50}
              className="hidden md:block"
            />
            <h1 className=" text-3xl lg:text-7xl text-primary-950 mb-3">
              {lang === "ar"
                ? "لطلـــــب الخدمــــــــــات"
                : "Request Services"}
            </h1>{" "}
            <Image
              src="/line3.svg"
              alt="logo"
              width={100}
              height={50}
              className="rotate-180 hidden md:block"
            />
          </div>
          <p className="text-primary-500 max-w-[600px] ">
            {lang === "ar"
              ? "الترافع والتقاضي - الإستشارات القانونية - الصياغة والمراجعة القانونية - الوساطة القانونية - الإجراءات القانونية - الحراسة القضائية - التوثيق."
              : "Litigation and litigation - Legal consultations - Legal drafting and review - Legal mediation - Legal procedures - Judicial custody - Documentation."}
          </p>
        </div>{" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex gap-[54px] flex-col"
        >
          <div className="grid grid-cols-2 gap-[30px] ">
            {/* name */}
            <div className="gap-1 flex flex-col col-span-2 lg:col-span-1">
              <FloatLabelInput
                label={`${
                  lang === "ar" ? "ادخل الاسم بالكامل" : "Enter full name"
                }`}
                {...register("name", {
                  required:
                    lang === "ar"
                      ? "الاسم بالكامل مطلوب"
                      : "Full name is required",
                })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </span>
              )}
            </div>
            {/* email */}
            <div className="gap-1 flex flex-col col-span-2 lg:col-span-1">
              <FloatLabelInput
                label={`${
                  lang === "ar" ? "ادخل البريد الالكتروني" : "Enter email"
                } `}
                format={`${lang === "ar" ? "(اختياري)" : "(Optional)"}`}
                {...register("email", {
                  required: false,
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: ` ${
                      lang === "ar"
                        ? " البريد الالكتروني غير صحيح "
                        : "Invalid email address"
                    }`,
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </span>
              )}
            </div>
            {/* phone */}
            <div className="gap-1 flex flex-col col-span-2">
              <FloatLabelInput
                label={lang === "ar" ? "ادخل رقم الهاتف" : "Enter phone number"}
                format={`${lang === "ar" ? "(اجباري)" : "(Required)"}`}
                {...register("phone", {
                  required:
                    lang === "ar"
                      ? "رقم الهاتف مطلوب"
                      : "Phone number is required",
                  pattern: {
                    value: /^[0-9+\-() ]+$/,
                    message: `${
                      lang === "ar"
                        ? " رقم الهاتف غير صحيح "
                        : "Invalid phone number"
                    }`,
                  },
                })}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone.message}</p>
                  )}
                </span>
              )}
            </div>
            {/*  message */}
            <div className="gap-1 flex flex-col col-span-2">
              <FloatLabelInput
                label={lang === "ar" ? "نص الرسالة" : " Message text"}
                {...register("message", {
                  required:
                    lang === "ar"
                      ? "نص الرسالة مطلوب"
                      : "Message text is required",
                })}
              />{" "}
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message && (
                    <p className="text-red-500">{errors.message.message}</p>
                  )}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="max-w-[285px] rounded-4xl border py-1.5 lg:py-3 cursor-pointer text-primary-900 text-lg lg:text-2xl"
          >
            {lang === "ar" ? "ارسال" : " Send"}
          </button>
        </form>
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-[128px] justify-center items-center">
          <div className="flex gap-3 items-center text-sm flex-col-reverse md:flex-row text-center ">
            {lang === "ar" ? (
              <div className="max-w-[300px] leading-wide">
                الرياض _ القيروان _ شارع الأمير محمد بن سعد بن عبدالعزيز •⁠ ⁠رقم
                المبنى : 6273
              </div>
            ) : (
              <div className="max-w-[300px] leading-wide">
                Riyadh _ Al-Qirawan _ Prince Mohammed bin Saad bin Abdulaziz
                Street • Building No: 6273
              </div>
            )}
            <Image width={30} height={30} src="/location.svg" alt="map-icon" />
          </div>
          <div className="flex gap-3 items-center text-sm flex-col-reverse md:flex-row text-center ">
            <a href="mailto:help@company.sa">help@company.sa</a>
            <Image
              width={30}
              height={30}
              src="/message.svg"
              alt="message-icon"
            />
          </div>
          <div className="flex gap-3 items-center text-sm flex-col-reverse md:flex-row text-center ">
            <div className="flex flex-col gap-1">
              <a href="tel:0500503828 " dir="ltr">
                0500503828
              </a>
              <a href="tel:0500503828 " dir="ltr">
                0557316611
              </a>
            </div>
            <Image width={30} height={30} src="/phone.svg" alt="phone-icon" />
          </div>
        </div>
        <div className="flex gap-2 justify-center itens-center">
          <div>{lang === "ar" ? "تابعنا على" : "Follow us on"}</div>
          <a href="">
            <Image src="/instagram.svg" width={20} height={20} alt="socials" />
          </a>
          <a href="https://www.linkedin.com/company/fs-law-firm/">
            <Image src="/linkedIn.svg" width={20} height={20} alt="socials" />
          </a>
          <a href="https://x.com/fs_lawfirm?s=21&t=1syTIcLG2quZ6-U48-H6zw">
            <Image src="/x.svg" width={20} height={20} alt="socials" />
          </a>
        </div>
      </div>
    </div>
  );
}
