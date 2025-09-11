import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://64.226.117.146/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
