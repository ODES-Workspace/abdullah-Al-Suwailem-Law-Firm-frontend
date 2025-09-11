import { axiosInstance } from "@/lib";

async function getPresident() {
  try {
    const res = await axiosInstance.get("/posts?type=president");
    return res.data[0];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching home hero data");
  }
}

export default getPresident;
