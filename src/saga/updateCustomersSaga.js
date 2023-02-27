import { call, put, takeLatest } from "redux-saga/effects";

import {
  UPDATE_CUSTOMERS,
  updateCustomersSuccess,
  updateCustomersFail,
} from "../action/updateCustomersAction";

import updateCustomersApi from "../api/updateCustomersApi";

export function* updateCustomersSaga(action) {
  try {
    const response = yield call(() => updateCustomersApi(action.params));
    yield put(updateCustomersSuccess(response, action));
  } catch (e) {
    yield put(updateCustomersFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(UPDATE_CUSTOMERS, updateCustomersSaga);
}
