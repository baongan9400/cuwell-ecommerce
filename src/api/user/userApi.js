import axiosPostService from "api/axiosPostService";

const userApi = {
  loadCart: () => {
    const url = "/carts";
    return axiosPostService.get(url);
  },

  addItemToCart: (post, quantity) => {
    const data = {
      post,
      quantity,
    };
    const url = `/carts/`;
    return axiosPostService.post(url, data);
  },
  removeCartItem: (pid) => {
    const url = `/cart/delete?post_id=${pid}`;
    return axiosPostService.delete(url);
  },
};

export default userApi;
