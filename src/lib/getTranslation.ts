import { Translation } from "./types";

export default function getTranslation(
  translations: Translation[] | undefined,
  lang: string
) {
  return translations?.find((t) => t.locale === lang);
}
