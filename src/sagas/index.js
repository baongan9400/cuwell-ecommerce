import { all } from "redux-saga/effects";
import userSaga from "./login/userSaga";
import searchPostsSaga from "./posts/search.saga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    searchPostsSaga()
  ]);
}
