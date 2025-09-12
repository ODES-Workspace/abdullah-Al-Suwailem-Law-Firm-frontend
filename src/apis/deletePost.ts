import { axiosInstance } from "@/lib";

export default async function deletePost(id: number) {
  try {
    const res = await axiosInstance.delete(`/posts/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating post");
  }
}
