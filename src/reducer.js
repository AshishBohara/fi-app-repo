import { combineReducers } from "redux";

import login from "./reducer/loginReducer";
import getInterestRateList from "./reducer/getInterestRateListReducer";
import getInterestRateView from "./reducer/getInterestRateViewReducer";
import updateInterestRate from "./reducer/updateInterestRateReducer";

export default combineReducers({
  login,
  getInterestRateList,
  getInterestRateView,
  updateInterestRate,
});
