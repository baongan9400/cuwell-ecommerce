import { call, put, takeEvery } from 'redux-saga/effects';
import { getSearchPostData } from 'api/posts/search';
import { searchComplete } from 'redux/actions/posts/search.action';
import * as type from 'redux/constants';

function* getSearchPostSaga(action) {
  console.log("saga");
  try {
    const data = yield call(getSearchPostData, action.params);
    yield put(searchComplete(data));
  } catch (error) {
    console.log(error)
  }
}


function* searchPostsSaga() {
  yield takeEvery(type.LOAD_POST, getSearchPostSaga);
}

export default searchPostsSaga;