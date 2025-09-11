import { axiosInstance, Item } from "@/lib";

export default async function updatePost(data: Item) {
  try {
    const res = await axiosInstance.put(`/posts/${data.id}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating post");
  }
}
