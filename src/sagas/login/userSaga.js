import { takeLatest, takeEvery, call, put, all } from "redux-saga/effects";
import authenApi from "api/authen/authenApi";
import * as types from "redux/constants";
import * as actions from "redux/actions/login/authAction";
import history from "../../history";
import jwt_decode from "jwt-decode";

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
        // console.log("role",decoded.role);
        // if (decoded.role && decoded.role.includes("Client")) 
        // window.location.href = "/";
        // else 
        window.location.href = "/home";
      }
    }
  } catch (e) {
    yield put({ type: types.ERROR, payload: e });
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
