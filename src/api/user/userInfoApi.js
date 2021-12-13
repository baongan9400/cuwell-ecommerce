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
    console.log("data", data);
    const url = `auth-service/users/password`;
    return axiosManagement.patch(url, data);
  },
};

export default userInfoApi;
