import {
  CREATE_LOAN_CHARGES,
  CREATE_LOAN_CHARGES_SUCCESS,
  CREATE_LOAN_CHARGES_FAIL,
  CREATE_LOAN_CHARGES_RESET,
} from "../action/createLoanChargesAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_LOAN_CHARGES:
      return {
        ...state,
        apiState: "loading",
      };

    case CREATE_LOAN_CHARGES_SUCCESS:
      return {
        ...state,
        apiState: "success",
        message: action.response.data.message,
      };

    case CREATE_LOAN_CHARGES_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case CREATE_LOAN_CHARGES_RESET:
      return initialState;

    default:
      return state;
  }
}
