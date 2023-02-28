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
import getPenaltyListSaga from "./saga/getPenaltyListSaga";
import getPenaltyViewSaga from "./saga/getPenaltyViewSaga";
import updatePenaltySaga from "./saga/updatePenaltySaga";
import createLoanChargesSaga from "./saga/createLoanChargesSaga";
import getLoanChargesViewSaga from "./saga/getLoanChargesViewSaga";
import getLoanChargesListSaga from "./saga/getLoanChargesListSaga";
import updateLoanChargesSaga from "./saga/updateLoanChargesSaga";
import createCustomersSaga from "./saga/createCustomersSaga";
import getCustomersViewSaga from "./saga/getCustomersViewSaga";
import getCustomersListSaga from "./saga/getCustomersListSaga";
import updateCustomersSaga from "./saga/updateCustomersSaga";
import addCustomerLoanSaga from "./saga/addCustomerLoanSaga";

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
sagaMiddleware.run(getPenaltyListSaga);
sagaMiddleware.run(getPenaltyViewSaga);
sagaMiddleware.run(updatePenaltySaga);
sagaMiddleware.run(createLoanChargesSaga);
sagaMiddleware.run(getLoanChargesListSaga);
sagaMiddleware.run(getLoanChargesViewSaga);
sagaMiddleware.run(updateLoanChargesSaga);
sagaMiddleware.run(createCustomersSaga);
sagaMiddleware.run(getCustomersViewSaga);
sagaMiddleware.run(getCustomersListSaga);
sagaMiddleware.run(updateCustomersSaga);
sagaMiddleware.run(addCustomerLoanSaga);

// render the application

export default store;
