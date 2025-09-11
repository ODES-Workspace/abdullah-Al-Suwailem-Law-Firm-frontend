import { axiosInstance, Item } from "@/lib";

export default async function createContact(data: Item) {
  try {
    const res = await axiosInstance.post("/contact-form", data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating post");
  }
}
