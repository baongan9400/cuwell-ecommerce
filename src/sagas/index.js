import { all } from "redux-saga/effects";
import categorySaga from "./category/categorySaga";
import userSaga from "./login/userSaga";
import searchPostsSaga from "./posts/search.saga";
import addressSaga from "./signup/address.saga";
import registerSaga from "./signup/register.saga";
import addToCartSaga from "./user/addtocart.saga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    searchPostsSaga(),
    categorySaga(),
    addressSaga(),
    registerSaga(),
    addToCartSaga(),
  ]);
}
