import {
  UPDATE_PENALTY,
  UPDATE_PENALTY_SUCCESS,
  UPDATE_PENALTY_FAIL,
  UPDATE_PENALTY_RESET,
} from "../action/updatePenaltyAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_PENALTY:
      return {
        ...state,
        apiState: "loading",
      };

    case UPDATE_PENALTY_SUCCESS:
      return {
        ...state,
        apiState: "success",
        message: action.response.data.message,
      };

    case UPDATE_PENALTY_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case UPDATE_PENALTY_RESET:
      return initialState;

    default:
      return state;
  }
}
