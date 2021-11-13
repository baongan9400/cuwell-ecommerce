import { all } from "redux-saga/effects";
import categorySaga from "./category/categorySaga";
import userSaga from "./login/userSaga";
import searchPostsSaga from "./posts/search.saga";
import addressSaga from "./signup/address.saga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    searchPostsSaga(),
    categorySaga(),
    addressSaga()
  ]);
}
