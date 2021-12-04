import axios from "axios";
import queryString from "query-string";

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosConfig.interceptors.request.use(async (config) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  } else return config;
});

axiosConfig.interceptors.response.use(
  (respone) => {
    if (respone && respone.data) {
      return respone.data;
    }
    return respone;
  },
  (error) => {
    throw error;
  }
);

export default axiosConfig;
