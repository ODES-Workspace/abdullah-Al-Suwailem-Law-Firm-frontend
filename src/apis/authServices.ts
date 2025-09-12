import { axiosInstance } from "@/lib";

type LoginData = {
  email: string;
  password: string;
};

export const login = async (data: LoginData) => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const res = await axiosInstance.post("/auth/logout");
    return res.data;
  } catch (error) {
    throw error;
  }
};
