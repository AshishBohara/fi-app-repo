import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";
// sagas
import loginSaga from "./saga/loginSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(loginSaga);

// render the application

export default store;
