import { call, put, takeLatest } from "redux-saga/effects";

import {
  ADD_CUSTOMER_LOAN,
  addCustomerLoanSuccess,
  addCustomerLoanFail,
} from "../action/addCustomerLoanAction";

import addCustomerLoanApi from "../api/addCustomerLoanApi";

export function* addCustomerLoanSaga(action) {
  try {
    const response = yield call(() => addCustomerLoanApi(action.params));
    yield put(addCustomerLoanSuccess(response, action));
  } catch (e) {
    yield put(addCustomerLoanFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(ADD_CUSTOMER_LOAN, addCustomerLoanSaga);
}
