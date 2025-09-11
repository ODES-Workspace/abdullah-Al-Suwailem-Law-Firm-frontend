import { axiosInstance } from "@/lib";

async function getServices() {
  try {
    const res = await axiosInstance.get("/posts?type=services");
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching services data");
  }
}

export default getServices;
