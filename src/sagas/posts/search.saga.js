import { call, put, takeEvery } from "redux-saga/effects";
import { getSearchPostData } from "api/posts/search";
import { searchSuccess } from "redux/actions/posts/search.action";
import * as type from "redux/constants";

function* getSearchPostSaga(action) {
  try {
    const data = yield call(getSearchPostData, action.params);
    yield put(searchSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
function* getSearchAutoCompleteSaga(action) {
  try {
    const data = yield call(getSearchPostData, action.params);
    yield put(searchSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
function* searchPostsSaga() {
  yield takeEvery(type.LOAD_POST, getSearchPostSaga);
  yield takeEvery(type.LOAD_POST, getSearchAutoCompleteSaga);
}

export default searchPostsSaga;
