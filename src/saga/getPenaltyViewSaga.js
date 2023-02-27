import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_PENALTY_VIEW,
  getPenaltyViewSuccess,
  getPenaltyViewFail,
} from "../action/getPenaltyViewAction";

import getPenaltyViewApi from "../api/getPenaltyViewApi";

export function* getPenaltyViewSaga(action) {
  try {
    const response = yield call(() => getPenaltyViewApi(action.params));
    yield put(getPenaltyViewSuccess(response, action));
  } catch (e) {
    yield put(getPenaltyViewFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(GET_PENALTY_VIEW, getPenaltyViewSaga);
}
