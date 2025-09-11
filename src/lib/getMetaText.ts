"use client";
import { useContextProvider } from "@/context/Context";
import { Meta, Translation } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GetMetaText(key: string, data: any) {
  const { lang } = useContextProvider();
  const meta = data?.metas?.find((t: Meta) => t.meta_key === key);
  return meta?.translations?.find((tr: Translation) => tr.locale === lang)
    ?.value;
}
