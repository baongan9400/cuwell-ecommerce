import axiosConfig from "api/axiosConfig";

const cartApi = {
  loadCart: () => {
    const url = "post-service/carts";
    return axiosConfig.get(url);
  },

  addItemToCart: (post, quantity) => {
    const data = {
      post,
      quantity,
    };
    const url = `post-service/carts/`;
    return axiosConfig.post(url, data);
  },
  removeCartItem: (pid) => {
    const url = `post-service/cart/delete?post_id=${pid}`;
    return axiosConfig.delete(url);
  },
};

export default cartApi;
