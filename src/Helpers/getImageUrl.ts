export const getImageUrl = (imagePath: string | null | undefined): string => {
  if (!imagePath) return "";

  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return `${baseUrl}${imagePath}`;
};
