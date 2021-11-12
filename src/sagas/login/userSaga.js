import { takeLatest, takeEvery, call, put, all } from "redux-saga/effects";
import authenApi from "api/authen/authenApi";
import * as types from "redux/constants";
import * as actions from "redux/actions/login/authAction";
import history from "../../history";
import { Redirect } from "react-router-dom";

function* login({ email, password }) {
  try {
    console.log("here");
    const data = yield call(authenApi.login, { email, password });
    console.log("data login: ", data);
    yield put(actions.userLoggedIn(data));

    if (data.user.roles.includes("ROLE_ADMIN"))
      return <Redirect to="/management" />;
    else return <Redirect to="/profile" />;
  } catch (e) {
    yield put({ type: types.ERROR, payload: e.response.data });
    // console.log("error login:", e.response.data)
  }
}

function* logout() {
  yield call(authenApi.logout);
  yield put(actions.userLoggedOutAction());
  history.push("/home");
}

function* checkJWT() {
  const result = yield call(authenApi.isExpired);
  if (result === true) {
    yield call(authenApi.logout);
    yield put(actions.userLoggedOutAction());
  }
}

function* watchLoginUser() {
  yield takeEvery(types.LOGIN_USER, login);
}

function* watchLogoutUser() {
  yield takeEvery(types.LOGOUT_USER, logout);
}

function* watchCheckJWT() {
  yield takeLatest(types.CHECK_JWT_EXP, checkJWT);
}

function* userSaga() {
  yield all([watchLoginUser(), watchLogoutUser(), watchCheckJWT()]);
}

export default userSaga;
