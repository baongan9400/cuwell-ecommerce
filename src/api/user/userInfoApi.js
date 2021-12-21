import axiosManagement from "../axiosAuthenService";

const userInfoApi = {
  updateUser: (
    { name, phone, city, district, commune, ratingAverage },
    idUser
  ) => {
    const data = {
      userData: {
        name,
        phone,
        ratingAverage,
        address: {
          city,
          district,
          commune,
        },
      },
    };
    const url = `auth-service/users/${idUser}/`;
    return axiosManagement.put(url, data);
  },
  resetPassword: ({ oldPassword, newPassword }) => {
    const data = {
      changePasswordData: {
        oldPassword,
        newPassword,
      },
    };
    const url = `auth-service/users/password`;
    return axiosManagement.patch(url, data);
  },
  manageUserPosts: (requestParams, idUser) => {
    const url = `post-service/posts/users/${idUser}/`;
    return axiosManagement.get(url, { params: requestParams });
  },
};

export default userInfoApi;
