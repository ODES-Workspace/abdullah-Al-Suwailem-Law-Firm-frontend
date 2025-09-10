import axiosInstance from "@/lib/axiosInstance";

async function getPresident() {
  try {
    const res = await axiosInstance.get("/president-message.json");
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching home hero data");
  }
}

export default getPresident;
