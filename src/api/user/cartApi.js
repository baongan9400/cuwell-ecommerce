import axiosManagement from "../axiosAuthenService";

const cartApi = {
  loadCart: () => {
    const url = "post-service/carts/";
    return axiosManagement.get(url);
  },

  addItemToCart: (post, quantity, payee_email) => {
    const data = {
      post,
      quantity,
      payee_email,
    };
    const url = `post-service/carts/`;
    return axiosManagement.post(url, data);
  },
  removeCartItem: (pid) => {
    var url = `post-service​/carts​/posts​/${pid}​/`;
    url = url.replace(/[^\x00-\x7F]/g, "");
    return axiosManagement.delete(url);
  },
};

export default cartApi;
