import axiosInstance from "@/lib/axiosInstance";

async function getPartners() {
  try {
    const res = await axiosInstance.get("/partners.json");
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch partners");
  }
}

export default getPartners;
