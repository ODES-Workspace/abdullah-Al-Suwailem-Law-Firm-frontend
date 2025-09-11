import { axiosInstance } from "@/lib";

async function getFeatures() {
  try {
    const res = await axiosInstance.get("/posts?type=features");
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch features");
  }
}

export default getFeatures;
