import {
  UPDATE_INTEREST_RATE,
  UPDATE_INTEREST_RATE_SUCCESS,
  UPDATE_INTEREST_RATE_FAIL,
  UPDATE_INTEREST_RATE_RESET,
} from "../action/updateInterestRateAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_INTEREST_RATE:
      return {
        ...state,
        apiState: "loading",
      };

    case UPDATE_INTEREST_RATE_SUCCESS:
      return {
        ...state,
        apiState: "success",
        message: action.response.data.message,
      };

    case UPDATE_INTEREST_RATE_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case UPDATE_INTEREST_RATE_RESET:
      return initialState;

    default:
      return state;
  }
}
