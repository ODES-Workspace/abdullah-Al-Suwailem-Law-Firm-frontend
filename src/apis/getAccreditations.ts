import { axiosInstance } from "@/lib";

async function getAccreditations() {
  try {
    const res = await axiosInstance.get("/posts?type=accreditations");
    return res.data;
  } catch (error) {
    console.error("Error fetching accreditations:", error);
    return null;
  }
}

export default getAccreditations;
