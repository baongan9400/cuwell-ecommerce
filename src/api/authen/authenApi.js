import axiosManagement from "../axiosManagement";

const authenApi = {
  login: ({ email, password }) => {
    const url = `auth/login`;
    return axiosManagement.post(url, { email, password });
  },
};

export default authenApi;
