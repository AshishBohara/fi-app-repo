import {
  UPDATE_LOAN_CHARGES,
  UPDATE_LOAN_CHARGES_SUCCESS,
  UPDATE_LOAN_CHARGES_FAIL,
  UPDATE_LOAN_CHARGES_RESET,
} from "../action/updateLoanChargesAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOAN_CHARGES:
      return {
        ...state,
        apiState: "loading",
      };

    case UPDATE_LOAN_CHARGES_SUCCESS:
      return {
        ...state,
        apiState: "success",
        message: action.response.data.message,
      };

    case UPDATE_LOAN_CHARGES_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case UPDATE_LOAN_CHARGES_RESET:
      return initialState;

    default:
      return state;
  }
}
