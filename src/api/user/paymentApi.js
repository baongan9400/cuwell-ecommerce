import axiosManagement from "../axiosAuthenService";

const paymentApi = {
  checkout: ({ street, commune, district, city }) => {
    const data = {
      street: street + " " + commune,
      district,
      city,
    };
    const url = `post-service/buyer/checkout/`;
    console.log(data);
    return axiosManagement.post(url, data);
  },
  loadBuyOrder: () => {
    const url = "post-service/buyer/orders/";
    return axiosManagement.get(url);
  },
  loadSoldOrder: () => {
    const url = "post-service/seller/orders/";
    return axiosManagement.get(url);
  },
};

export default paymentApi;
