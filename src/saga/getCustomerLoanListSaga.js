import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_CUSTOMER_LOAN_LIST,
  getCustomerLoanListSuccess,
  getCustomerLoanListFail,
} from "../action/getCustomerLoanListAction";

import getCustomerLoanListApi from "../api/getCustomerLoanListApi";

export function* getCustomerLoanListSaga(action) {
  try {
    const response = yield call(() => getCustomerLoanListApi(action.params));
    yield put(getCustomerLoanListSuccess(response, action));
  } catch (e) {
    yield put(getCustomerLoanListFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(GET_CUSTOMER_LOAN_LIST, getCustomerLoanListSaga);
}
