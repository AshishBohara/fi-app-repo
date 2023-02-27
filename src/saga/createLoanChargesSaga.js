import { call, put, takeLatest } from "redux-saga/effects";

import {
  CREATE_LOAN_CHARGES,
  createLoanChargesSuccess,
  createLoanChargesFail,
} from "../action/createLoanChargesAction";

import createLoanChargesApi from "../api/createLoanChargesApi";

export function* createLoanChargesSaga(action) {
  try {
    const response = yield call(() => createLoanChargesApi(action.params));
    yield put(createLoanChargesSuccess(response, action));
  } catch (e) {
    yield put(createLoanChargesFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(CREATE_LOAN_CHARGES, createLoanChargesSaga);
}
