import axios from "axios";
import queryString from "query-string";

const axiosPostService = axios.create({
  baseURL: process.env.REACT_APP_POST_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosPostService.interceptors.request.use(async (config) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  } else return config;
});

axiosPostService.interceptors.response.use(
  (respone) => {
    if (respone && respone.data) {
      return respone.data;
    }
    return respone;
  },
  (error) => {
    throw error;
  },
);

export default axiosPostService;
