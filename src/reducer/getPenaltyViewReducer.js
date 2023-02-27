import {
  GET_PENALTY_VIEW,
  GET_PENALTY_VIEW_SUCCESS,
  GET_PENALTY_VIEW_FAIL,
  GET_PENALTY_VIEW_RESET,
} from "../action/getPenaltyViewAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
  penalty: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PENALTY_VIEW:
      return {
        ...state,
        apiState: "loading",
      };

    case GET_PENALTY_VIEW_SUCCESS:
      return {
        ...state,
        apiState: "success",
        message: action.response.data.message,
        penalty: action.response.data.data,
      };

    case GET_PENALTY_VIEW_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case GET_PENALTY_VIEW_RESET:
      return initialState;

    default:
      return state;
  }
}
