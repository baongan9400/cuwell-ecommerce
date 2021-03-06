import { takeEvery, takeLatest, call, put, all } from "redux-saga/effects";
import * as type from "redux/constants";
import cartApi from "api/user/cartApi";
import * as actions from "redux/actions/cartAction";
import { pushToast } from "components/Toast";

//ADD TO CART
const addItemAPI = async (pid, quantity, payee_email) => {
  try {
    const response = await cartApi.addItemToCart(pid, quantity, payee_email);
    return response.data;
  } catch (e) {
    pushToast("error", "You can't add your product to cart.");
  }
};

function* addToCart(action) {
  try {
    const data = yield call(
      addItemAPI,
      action.post_id,
      action.quantity,
      action.payee_email
    );
    yield put(actions.addedToCartAction(data));
  } catch (e) {
    pushToast("error", "You can't add your own product to cart.");
  }
}
//REMOVE ITEM
const removeItemAPI = async (pid) => {
  try {
    const response = await cartApi.removeCartItem(pid);
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
    const response = await cartApi.loadCart();
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
    // window.location.href = "/home";
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
