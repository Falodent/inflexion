import axios from "axios";

const isProd = process.env.NODE_ENV !== "development";

const axiosInstance = axios.create({
  baseURL: isProd ? `/api` : `${process.env.NEXT_PUBLIC_SERVER_URL}api/`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
