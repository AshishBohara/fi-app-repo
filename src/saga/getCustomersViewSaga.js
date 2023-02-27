import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_CUSTOMERS_VIEW,
  getCustomersViewSuccess,
  getCustomersViewFail,
} from "../action/getCustomersViewAction";

import getCustomersViewApi from "../api/getCustomersViewApi";

export function* getCustomersViewSaga(action) {
  try {
    const response = yield call(() => getCustomersViewApi(action.params));
    yield put(getCustomersViewSuccess(response, action));
  } catch (e) {
    yield put(getCustomersViewFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(GET_CUSTOMERS_VIEW, getCustomersViewSaga);
}
