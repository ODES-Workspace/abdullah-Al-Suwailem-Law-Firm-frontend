import { axiosInstance } from "@/lib";

async function getMission() {
  try {
    const res = await axiosInstance.get("/posts?type=mission");
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching mission");
  }
}

export default getMission;
