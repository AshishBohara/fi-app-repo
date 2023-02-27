import { call, put, takeLatest } from "redux-saga/effects";

import {
  CREATE_CUSTOMERS,
  createCustomersSuccess,
  createCustomersFail,
} from "../action/createCustomersAction";

import createCustomersApi from "../api/createCustomersApi";

export function* createCustomersSaga(action) {
  try {
    const response = yield call(() => createCustomersApi(action.params));
    yield put(createCustomersSuccess(response, action));
  } catch (e) {
    yield put(createCustomersFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(CREATE_CUSTOMERS, createCustomersSaga);
}
