import {
  GET_INTEREST_RATE_LIST,
  GET_INTEREST_RATE_LIST_SUCCESS,
  GET_INTEREST_RATE_LIST_FAIL,
  GET_INTEREST_RATE_LIST_RESET,
} from "../action/getInterestRateListAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
  list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INTEREST_RATE_LIST:
      return {
        ...state,
        apiState: "loading",
      };

    case GET_INTEREST_RATE_LIST_SUCCESS:
      return {
        ...state,
        apiState: "success",
        list: action.response.data.data,
      };

    case GET_INTEREST_RATE_LIST_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case GET_INTEREST_RATE_LIST_RESET:
      return initialState;

    default:
      return state;
  }
}
