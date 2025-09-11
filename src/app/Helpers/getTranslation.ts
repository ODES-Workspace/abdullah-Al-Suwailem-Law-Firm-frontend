import { Translation } from "@/lib";

export function getTranslation(
  translations: Translation[] | undefined,
  locale: string,
  field: keyof Translation
): string {
  const value = translations?.find((t) => t.locale === locale)?.[field];
  return value !== undefined && value !== null ? String(value) : "";
}
