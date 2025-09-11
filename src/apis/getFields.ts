import { axiosInstance } from "@/lib";

async function getFields() {
  try {
    const res = await axiosInstance.get("/posts?type=fields");
    return res.data;
  } catch (error) {
    console.error("Error in getFields:", error);
    throw new Error("Error in getFields");
  }
}

export default getFields;
