import { call, put, takeLatest } from "redux-saga/effects";

import {
  UPDATE_PENALTY,
  updatePenaltySuccess,
  updatePenaltyFail,
} from "../action/updatePenaltyAction";

import updatePenaltyApi from "../api/updatePenaltyApi";

export function* updatePenaltySaga(action) {
  try {
    const response = yield call(() => updatePenaltyApi(action.params));
    yield put(updatePenaltySuccess(response, action));
  } catch (e) {
    yield put(updatePenaltyFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(UPDATE_PENALTY, updatePenaltySaga);
}
