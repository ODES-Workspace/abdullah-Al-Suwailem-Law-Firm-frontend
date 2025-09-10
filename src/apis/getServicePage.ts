import { axiosInstance } from "@/lib";

async function getServicePage() {
  try {
    const res = await axiosInstance.get("/service-page.json");
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch service page");
  }
}

export default getServicePage;
