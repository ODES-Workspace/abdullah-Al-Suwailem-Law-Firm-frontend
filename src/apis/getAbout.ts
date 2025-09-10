import { axiosInstance } from "@/lib";

async function getAbout() {
  try {
    const res = await axiosInstance.get("/about.json");
    return res.data;
  } catch (error) {
    console.error("Error fetching about data:", error);
    return null;
  }
}

export default getAbout;
