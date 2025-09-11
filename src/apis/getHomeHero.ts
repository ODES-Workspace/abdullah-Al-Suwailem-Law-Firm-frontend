import { axiosInstance } from "@/lib";

export default async function getHomeHero() {
  try {
    const data = await axiosInstance.get("posts?type=hero");
    return data.data[0];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching home hero data");
  }
}
