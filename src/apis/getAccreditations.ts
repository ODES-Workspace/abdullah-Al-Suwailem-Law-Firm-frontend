import axiosInstance from "@/lib/axiosInstance";

async function getAccreditations() {
  try {
    const res = await axiosInstance.get("/accreditations.json");
    return res.data;
  } catch (error) {
    console.error("Error fetching accreditations:", error);
    return null;
  }
}

export default getAccreditations;
