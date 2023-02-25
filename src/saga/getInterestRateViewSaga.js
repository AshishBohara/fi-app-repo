import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_INTEREST_RATE_VIEW,
  getInterestRateViewSuccess,
  getInterestRateViewFail,
} from "../action/getInterestRateViewAction";

import getInterestRateViewApi from "../api/getInterestRateViewApi";

export function* getInterestRateViewSaga(action) {
  try {
    const response = yield call(() => getInterestRateViewApi(action.params));
    yield put(getInterestRateViewSuccess(response, action));
  } catch (e) {
    yield put(getInterestRateViewFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(GET_INTEREST_RATE_VIEW, getInterestRateViewSaga);
}
