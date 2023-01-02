import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.withCredentials = true;
    return config;
  },
  async (error) => {
    // Do something with request error
    return await Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    // Do something with response error
    return await Promise.reject(error);
  }
);

export default axiosInstance;
