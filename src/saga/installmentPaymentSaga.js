import { call, put, takeLatest } from "redux-saga/effects";

import {
  INSTALLMENT_PAYMENT,
  installmentPaymentSuccess,
  installmentPaymentFail,
} from "../action/installmentPaymentAction";

import installmentPaymentApi from "../api/installmentPaymentApi";

export function* installmentPaymentSaga(action) {
  try {
    const response = yield call(() => installmentPaymentApi(action.params));
    yield put(installmentPaymentSuccess(response, action));
  } catch (e) {
    yield put(installmentPaymentFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(INSTALLMENT_PAYMENT, installmentPaymentSaga);
}
