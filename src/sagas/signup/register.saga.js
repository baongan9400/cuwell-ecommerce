import { call, put, takeEvery } from "redux-saga/effects";

import * as type from "redux/constants";
import { pushToast } from "components/Toast";
import authenApi from "api/authen/authenApi";

function* userRegister(action) {
  try {
    const data = yield call(authenApi.createUser, action);
    yield put({ type: type.USER_REGISTER, payload: data });
  } catch (e) {
    pushToast("error", "Sign up failed.");
  }
}

function* registerSaga() {
  yield takeEvery(type.USER_REGISTER_REQUESTED, userRegister);
}

export default registerSaga;
