import { axiosInstance, Item } from "@/lib";

export default async function createServiceRequest(data: Item) {
  try {
    const res = await axiosInstance.post("/posts", data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating post");
  }
}
