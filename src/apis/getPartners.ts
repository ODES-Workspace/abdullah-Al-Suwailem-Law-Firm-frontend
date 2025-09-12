import { axiosInstance } from "@/lib";

async function getPartners() {
  try {
    const res = await axiosInstance.get("/posts?type=partners");
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch partners");
  }
}

export default getPartners;
