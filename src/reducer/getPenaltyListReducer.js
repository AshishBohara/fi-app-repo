import {
  GET_PENALTY_LIST,
  GET_PENALTY_LIST_SUCCESS,
  GET_PENALTY_LIST_FAIL,
  GET_PENALTY_LIST_RESET,
} from "../action/getPenaltyListAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
  list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PENALTY_LIST:
      return {
        ...state,
        apiState: "loading",
      };

    case GET_PENALTY_LIST_SUCCESS:
      return {
        ...state,
        apiState: "success",
        list: action.response.data.data,
      };

    case GET_PENALTY_LIST_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case GET_PENALTY_LIST_RESET:
      return initialState;

    default:
      return state;
  }
}
