"use client";
import useLogin from "@/hooks/useLogin";
import Input from "@/shared/Input";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

export default function Page() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutate, isPending } = useLogin();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/admin";
    }
  }, []);
  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          setError(
            error.response?.data?.message || "Invalid login credentials"
          );
        }
      },
      onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/admin";
      },
    });
  };

  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('/fahad.jpg')] h-[100vh] p-2.5 lg:p-5 w-[100vw] bg-no-repeat bg-center bg-cover flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[500px] w-full bg-white p-5 rounded-2xl flex flex-col gap-5"
      >
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-2xl font-bold text-primary "> تسجيل الدخول</h1>
          <Image src="/logo.svg" width={50} height={50} alt="logo" />
        </div>
        <div className="flex flex-col gap-2">
          <label> البريد الإلكتروني*</label>
          <Input
            type="email"
            {...register("email", {
              required: "البريد مطلوب",
              maxLength: 80,
              pattern: {
                value: /^\S+@\S+$/i,
                message: " البريد الالكتروني غير صحيح ",
              },
              onChange: (e) => {
                setError("");
                return e;
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

        <div className="flex flex-col gap-2">
          <label>كلمة المرور*</label>
          <Input
            type="password"
            {...register("password", {
              required: "كلمة المرور مطلوبة",
              minLength: {
                value: 6,
                message: "كلمة المرور يجب ان تكون اكثر من 6 حروف",
              },
              maxLength: {
                value: 20,
                message: "كلمة المرور يجب ان تكون اقل من 20 حرف",
              },
              onChange: (e) => {
                setError("");
                return e;
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="bg-primary cursor-pointer text-white py-[10px] rounded-2xl mt-4"
        >
          {" "}
          {isPending ? "جاري تسجيل الدخول..." : " تسجيل الدخول"}
        </button>

        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
}
