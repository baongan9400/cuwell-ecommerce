import { call, put, takeLatest } from 'redux-saga/effects';
import categoryApi from 'api/category/categoryApi';
import {getAllCategoriesCompleteAction} from 'redux/actions/category/category.action';

import * as type from "redux/constants";

function* getAllCatogiresSaga() {
    try {
        const data = yield call(categoryApi.getAllCategoriesData);
        yield put(getAllCategoriesCompleteAction(data));
    } catch (error) {
        //handle error
    }
}

function* categorySaga() {
    yield takeLatest(type.GET_ALL_CATEGORIES_REQUEST, getAllCatogiresSaga);
}

export default categorySaga;