import { axiosInstance } from "@/lib";

export default async function getHomeHero() {
  try {
    const data = await axiosInstance.get("/homehero.json");
    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching home hero data");
  }
}
