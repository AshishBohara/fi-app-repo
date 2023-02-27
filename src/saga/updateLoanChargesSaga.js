import { call, put, takeLatest } from "redux-saga/effects";

import {
  UPDATE_LOAN_CHARGES,
  updateLoanChargesSuccess,
  updateLoanChargesFail,
} from "../action/updateLoanChargesAction";

import updateLoanChargesApi from "../api/updateLoanChargesApi";

export function* updateLoanChargesSaga(action) {
  try {
    const response = yield call(() => updateLoanChargesApi(action.params));
    yield put(updateLoanChargesSuccess(response, action));
  } catch (e) {
    yield put(updateLoanChargesFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(UPDATE_LOAN_CHARGES, updateLoanChargesSaga);
}
