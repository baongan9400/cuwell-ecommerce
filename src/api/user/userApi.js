import axiosManagement from "../axiosAuthenService";

const userApi = {
  loadCart: () => {
    const url = "post-service/carts/";
    return axiosManagement.get(url);
  },

  addItemToCart: (post, quantity) => {
    const data = {
      post,
      quantity,
    };
    const url = `post-service/carts/`;
    return axiosManagement.post(url, data);
  },
  removeCartItem: (pid) => {
    const url = `post-service/cart/delete?post_id=${pid}`;
    return axiosManagement.delete(url);
  },
};

export default userApi;
