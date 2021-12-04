import { takeLatest, call, put, all } from "redux-saga/effects";
import authenApi from "api/authen/authenApi";
import * as types from "redux/constants";
import * as actions from "redux/actions/login/authAction";
import jwt_decode from "jwt-decode";
import * as cartAction from "redux/actions/cartAction";

function* login({ email, password }) {
  try {
    const data = yield call(authenApi.login, { email, password });
    if (data && data.payload) {
      localStorage.setItem("token", JSON.stringify(data.payload));
      const token = localStorage.getItem("token");
      //decode token
      if (token) {
        var decoded = jwt_decode(token);
        var userId = decoded.user.id;
        const userData = yield call(authenApi.getUserDetail, userId);
        yield put(actions.userLoggedIn(userData.payload));

        localStorage.setItem("user", JSON.stringify(userData.payload));
        window.location.href = "/home";

        yield put(cartAction.loadCartAction());
      }
    }
  } catch (e) {
    yield put({ type: types.ERROR, payload: e });
  }
}

function* logout() {
  localStorage.clear();
  yield put(actions.userLoggedOutAction());
  window.location.href = "/login";
}

function* checkJWT() {
  const result = yield call(authenApi.isExpired);
  if (result === true) {
    yield call(authenApi.logout);
    yield put(actions.userLoggedOutAction());
  }
}

function* watchLoginUser() {
  yield takeLatest(types.LOGIN_USER, login);
}

function* watchLogoutUser() {
  yield takeLatest(types.LOGOUT_USER, logout);
}

function* watchCheckJWT() {
  yield takeLatest(types.CHECK_JWT_EXP, checkJWT);
}

function* userSaga() {
  yield all([watchLoginUser(), watchLogoutUser(), watchCheckJWT()]);
}

export default userSaga;
