"use client";
import { MetaField, PostTranslation } from "./types";
import { useLang } from "@/context/LangContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GetMetaText(key: string, data: any) {
  const { lang } = useLang();
  const meta = data?.metas?.find((t: MetaField) => t.meta_key === key);
  return meta?.translations.find((tr: PostTranslation) => tr.locale === lang)
    ?.value;
}
