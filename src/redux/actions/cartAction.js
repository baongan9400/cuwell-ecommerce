import * as types from "../constants";

export const addNewToCart = (payload) => {
  return {
    type: "ADD_TO_CART",
    payload: payload,
  };
};

export const AddToCartAPI = (pid, quantity, payee_email) => {
  return {
    type: types.ADD_TO_CART_API,
    post_id: pid,
    quantity: quantity,
    payee_email,
  };
};
export const addedToCartAction = (cartItem) => {
  return {
    type: types.ADDED_TO_CART_API,
    cartItem,
  };
};

export const RemoveCartItemAPIAction = (pid) => {
  return {
    type: types.REMOVE_CART_ITEM_API,
    post_id: pid,
  };
};

export const loadCartAction = () => {
  return {
    type: types.LOAD_CART,
  };
};

export const cartLoadedAction = (cartItems) => {
  let postCart = [];
  cartItems?.forEach((element) => {
    postCart.push(element?.post);
  });
  localStorage.setItem("cart", JSON.stringify(postCart));

  return {
    type: types.CART_LOADED,
    cart: postCart,
  };
};

export const RemoveCartAction = () => {
  return {
    type: types.REMOVE_CART,
  };
};
