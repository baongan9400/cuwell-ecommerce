import axiosPostService from "api/axiosPostService";

const userApi = {
  loadCart: () => {
    const url = "/carts";
    return axiosPostService.get(url);
  },

  addItemToCart: (pid) => {
    const url = `/cart/add/${pid}`;
    return axiosPostService.post(url);
  },
  removeCartItem: (pid) => {
    const url = `/cart/delete?post_id=${pid}`;
    return axiosPostService.delete(url);
  },
};

export default userApi;
