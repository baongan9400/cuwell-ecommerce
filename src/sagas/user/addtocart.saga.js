import { takeEvery, takeLatest, call, put, all } from "redux-saga/effects";
import * as type from "redux/constants";
import userApi from "api/user/userApi";
import * as actions from "redux/actions/cartAction";
//ADD TO CART
const addItemAPI = async (pid) => {
  try {
    const response = await userApi.addItemToCart(pid);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    return e.response.data;
  }
};

function* addToCart(action) {
  try {
    const data = yield call(addItemAPI, action.post_id);
    yield put(actions.addedToCartAction(data));
  } catch (e) {
    console.log(e.messages);
  }
}
//REMOVE ITEM
const removeItemAPI = async (pid) => {
  try {
    const response = await userApi.removeCartItem(pid);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    return e.response.data;
  }
};

function* removeCartItem(action) {
  try {
    yield call(removeItemAPI, action.post_id);
  } catch (e) {
    console.log(e.messages);
  }
}
//LOAD CART ITEMS FROM DATABASE
const getCartItemsAPI = async () => {
  try {
    const response = await userApi.loadCart();
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};
function* loadCart() {
  try {
    const cartItems = yield call(getCartItemsAPI);
    yield put(actions.cartLoadedAction(cartItems));
    window.location.href = "/home";
  } catch (e) {
    console.log(e);
  }
}

//WATCHER SAGA
function* watchAddToCart() {
  yield takeEvery(type.ADD_TO_CART_API, addToCart);
}
function* watchRemoveCartItem() {
  yield takeEvery(type.REMOVE_CART_ITEM_API, removeCartItem);
}
function* watchLoadCart() {
  yield takeLatest(type.LOAD_CART, loadCart);
}
function* addToCartSaga() {
  yield all([watchAddToCart(), watchRemoveCartItem(), watchLoadCart()]);
}

export default addToCartSaga;
