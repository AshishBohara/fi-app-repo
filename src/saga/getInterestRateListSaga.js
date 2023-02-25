import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_INTEREST_RATE_LIST,
  getInterestRateListSuccess,
  getInterestRateListFail,
} from "../action/getInterestRateListAction";

import getInterestRateListApi from "../api/getInterestRateListApi";

export function* getInterestRateListSaga(action) {
  try {
    const response = yield call(() => getInterestRateListApi(action.params));
    yield put(getInterestRateListSuccess(response, action));
  } catch (e) {
    yield put(getInterestRateListFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(GET_INTEREST_RATE_LIST, getInterestRateListSaga);
}
