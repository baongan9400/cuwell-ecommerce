import axiosManagement from "../axiosAuthenService";

const paymentApi = {
  checkout: ({ street, commune, district, city }) => {
    const data = {
      street: street + " " + commune,
      district,
      city,
    };
    const url = `post-service/buyer/checkout/`;
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
  checkoutByCash: ({ street, commune, district, city }) => {
    const data = {
      street: street + " " + commune,
      district,
      city,
    };
    const url = `post-service/buyer/orders/`;
    return axiosManagement.post(url, data);
  },
  updateSellerOrder: (id, status) => {
    const data = {
      status,
    };
    const url = `post-service/seller/orders/${id}/`;
    return axiosManagement.patch(url, data);
  },
};

export default paymentApi;
