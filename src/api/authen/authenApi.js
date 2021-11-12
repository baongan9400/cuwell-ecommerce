import axiosManagement from "../axiosManagement";

const authenApi = {
  login: ({ email, password }) => {
    const loginData = { 
      loginData: {
        email,
        password
      }
    }
    const url = `auth/login`;
    return axiosManagement.post(url,loginData);
  },
};

export default authenApi;
