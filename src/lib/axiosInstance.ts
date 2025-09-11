import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://65.21.52.179:8090/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
