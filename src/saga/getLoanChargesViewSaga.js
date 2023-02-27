import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_LOAN_CHARGES_VIEW,
  getLoanChargesViewSuccess,
  getLoanChargesViewFail,
} from "../action/getLoanChargesViewAction";

import getLoanChargesViewApi from "../api/getLoanChargesViewApi";

export function* getLoanChargesViewSaga(action) {
  try {
    const response = yield call(() => getLoanChargesViewApi(action.params));
    yield put(getLoanChargesViewSuccess(response, action));
  } catch (e) {
    yield put(getLoanChargesViewFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(GET_LOAN_CHARGES_VIEW, getLoanChargesViewSaga);
}
