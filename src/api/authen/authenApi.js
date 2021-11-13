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
  },
    createUser: (body) => {
      const signupData = { 
        newUserData: {
          body
        }
      }
    const url = `auth/`;  
    return axiosManagement.post(url, signupData)
  },
};

export default authenApi;
