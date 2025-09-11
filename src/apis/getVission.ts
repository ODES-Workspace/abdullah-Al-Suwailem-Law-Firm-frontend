import { axiosInstance } from "@/lib";

async function getVission() {
  try {
    const res = await axiosInstance.get("/posts?type=vission");
    return res.data[0];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching vission");
  }
}

export default getVission;
