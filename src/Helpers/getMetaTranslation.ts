import { Meta } from "@/lib";

export function getMetaTranslation(
  metas: Meta[] | undefined,
  metaKey: string,
  locale: string
): string {
  const meta = metas?.find((m) => m.meta_key === metaKey);
  if (!meta) return "";

  const translation = meta.translations?.find((t) => t.locale === locale);
  return translation?.value || meta.value || "";
}
