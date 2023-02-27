import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_CUSTOMERS_LIST,
  getCustomersListSuccess,
  getCustomersListFail,
} from "../action/getCustomersListAction";

import getCustomersListApi from "../api/getCustomersListApi";

export function* getCustomersListSaga(action) {
  try {
    const response = yield call(() => getCustomersListApi(action.params));
    yield put(getCustomersListSuccess(response, action));
  } catch (e) {
    yield put(getCustomersListFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(GET_CUSTOMERS_LIST, getCustomersListSaga);
}
