import { axiosInstance } from "@/lib";

async function getGoals() {
  try {
    const res = await axiosInstance.get("/goals.json");
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching home hero data");
  }
}

export default getGoals;
