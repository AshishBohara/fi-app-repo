import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";
// sagas
import loginSaga from "./saga/loginSaga";
import getInterestRateListSaga from "./saga/getInterestRateListSaga";
import getInterestRateViewSaga from "./saga/getInterestRateViewSaga";
import updateInterestRateSaga from "./saga/updateInterestRateSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(loginSaga);
sagaMiddleware.run(getInterestRateListSaga);
sagaMiddleware.run(getInterestRateViewSaga);
sagaMiddleware.run(updateInterestRateSaga);

// render the application

export default store;
