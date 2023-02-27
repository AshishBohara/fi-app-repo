import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_LOAN_CHARGES_LIST,
  getLoanChargesListSuccess,
  getLoanChargesListFail,
} from "../action/getLoanChargesListAction";

import getLoanChargesListApi from "../api/getLoanChargesListApi";

export function* getLoanChargesListSaga(action) {
  try {
    const response = yield call(() => getLoanChargesListApi(action.params));
    yield put(getLoanChargesListSuccess(response, action));
  } catch (e) {
    yield put(getLoanChargesListFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(GET_LOAN_CHARGES_LIST, getLoanChargesListSaga);
}
