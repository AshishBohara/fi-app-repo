import {
  GET_INTEREST_RATE_VIEW,
  GET_INTEREST_RATE_VIEW_SUCCESS,
  GET_INTEREST_RATE_VIEW_FAIL,
  GET_INTEREST_RATE_VIEW_RESET,
} from "../action/getInterestRateViewAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
  interest_rate: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INTEREST_RATE_VIEW:
      return {
        ...state,
        apiState: "loading",
      };

    case GET_INTEREST_RATE_VIEW_SUCCESS:
      return {
        ...state,
        apiState: "success",
        message: action.response.data.message,
        interest_rate: action.response.data.data,
      };

    case GET_INTEREST_RATE_VIEW_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case GET_INTEREST_RATE_VIEW_RESET:
      return initialState;

    default:
      return state;
  }
}
