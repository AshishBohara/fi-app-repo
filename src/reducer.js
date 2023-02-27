import { combineReducers } from "redux";

import login from "./reducer/loginReducer";
import getInterestRateList from "./reducer/getInterestRateListReducer";
import getInterestRateView from "./reducer/getInterestRateViewReducer";
import updateInterestRate from "./reducer/updateInterestRateReducer";
import getPenaltyList from "./reducer/getPenaltyListReducer";
import getPenaltyView from "./reducer/getPenaltyViewReducer";
import updatePenalty from "./reducer/updatePenaltyReducer";
import createLoanCharges from "./reducer/createLoanChargesReducer";
import getLoanChargesView from "./reducer/getLoanChargesViewReducer";
import getLoanChargesList from "./reducer/getLoanChargesListReducer";
import updateLoanCharges from "./reducer/updateLoanChargesReducer";
import createCustomers from "./reducer/createCustomersReducer";
import getCustomersView from "./reducer/getCustomersViewReducer";
import getCustomersList from "./reducer/getCustomersListReducer";
import updateCustomers from "./reducer/updateCustomersReducer";
export default combineReducers({
  login,
  getInterestRateList,
  getInterestRateView,
  updateInterestRate,
  getPenaltyList,
  getPenaltyView,
  updatePenalty,
  createLoanCharges,
  getLoanChargesView,
  getLoanChargesList,
  updateLoanCharges,
  createCustomers,
  getCustomersView,
  getCustomersList,
  updateCustomers,
});
