import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_PENALTY_LIST,
  getPenaltyListSuccess,
  getPenaltyListFail,
} from "../action/getPenaltyListAction";

import getPenaltyListApi from "../api/getPenaltyListApi";

export function* getPenaltyListSaga(action) {
  try {
    const response = yield call(() => getPenaltyListApi(action.params));
    yield put(getPenaltyListSuccess(response, action));
  } catch (e) {
    yield put(getPenaltyListFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(GET_PENALTY_LIST, getPenaltyListSaga);
}
