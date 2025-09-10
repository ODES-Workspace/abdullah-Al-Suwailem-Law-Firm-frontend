import axiosInstance from "@/lib/axiosInstance";

async function getHomeServices() {
  try {
    const res = await axiosInstance.get("/home-services.json");
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error("Error fetching home services data");
  }
}

export default getHomeServices;
