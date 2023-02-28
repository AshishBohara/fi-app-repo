import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_CUSTOMER_INSTALLMENT_LIST,
  getCustomerInstallmentListSuccess,
  getCustomerInstallmentListFail,
} from "../action/getCustomerInstallmentListAction";

import getCustomerInstallmentListApi from "../api/getCustomerInstallmentListApi";

export function* getCustomerInstallmentListSaga(action) {
  try {
    const response = yield call(() =>
      getCustomerInstallmentListApi(action.params)
    );
    yield put(getCustomerInstallmentListSuccess(response, action));
  } catch (e) {
    yield put(getCustomerInstallmentListFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(
    GET_CUSTOMER_INSTALLMENT_LIST,
    getCustomerInstallmentListSaga
  );
}
