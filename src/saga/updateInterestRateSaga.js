import { call, put, takeLatest } from "redux-saga/effects";

import {
  UPDATE_INTEREST_RATE,
  updateInterestRateSuccess,
  updateInterestRateFail,
} from "../action/updateInterestRateAction";

import updateInterestRateApi from "../api/updateInterestRateApi";

export function* updateInterestRateSaga(action) {
  try {
    const response = yield call(() => updateInterestRateApi(action.params));
    yield put(updateInterestRateSuccess(response, action));
  } catch (e) {
    yield put(updateInterestRateFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(UPDATE_INTEREST_RATE, updateInterestRateSaga);
}
