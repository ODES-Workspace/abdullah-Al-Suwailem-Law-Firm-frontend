import { axiosInstance } from "@/lib";

async function getFields() {
  try {
    const res = await axiosInstance.get("/fields.json");
    return res.data;
  } catch (error) {
    console.error("Error in getFields:", error);
    throw new Error("Error in getFields");
  }
}

export default getFields;
