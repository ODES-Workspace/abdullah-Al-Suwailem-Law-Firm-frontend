import { axiosInstance, Item } from "@/lib";

export default async function createConsultation(data: Item) {
  try {
    const res = await axiosInstance.post("/consultants", data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating consultations");
  }
}
