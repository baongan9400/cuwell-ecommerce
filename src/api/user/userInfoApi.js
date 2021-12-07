import axiosManagement from "../axiosAuthenService";

const userInfoApi = {
  updateUser: ({ name, phone, city, district, commune }, idUser) => {
    const data = {
      userData: {
        name,
        phone,
        address: {
          city,
          district,
          commune,
        },
      },
    };
    const url = `auth-service/users/${idUser}`;
    return axiosManagement.patch(url, data);
  },
};

export default userInfoApi;
