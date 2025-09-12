import { axiosInstance } from "@/lib";

async function getPost({ type }: { type: string }) {
  try {
    const res = await axiosInstance.get(`/posts?type=${type}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching mission");
  }
}

export default getPost;
