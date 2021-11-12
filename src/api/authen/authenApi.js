import axiosManagement from "../axiosAuthenService";

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
  getUserDetail: (idUser) => {
    const url = `users/${idUser}`;
    return axiosManagement.get(url)
  }
};

export default authenApi;
