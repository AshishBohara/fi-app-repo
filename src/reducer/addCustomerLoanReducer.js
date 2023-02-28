import {
  ADD_CUSTOMER_LOAN,
  ADD_CUSTOMER_LOAN_SUCCESS,
  ADD_CUSTOMER_LOAN_FAIL,
  ADD_CUSTOMER_LOAN_RESET,
} from "../action/addCustomerLoanAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CUSTOMER_LOAN:
      return {
        ...state,
        apiState: "loading",
      };

    case ADD_CUSTOMER_LOAN_SUCCESS:
      return {
        ...state,
        apiState: "success",
        message: action.response.data.message,
      };

    case ADD_CUSTOMER_LOAN_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case ADD_CUSTOMER_LOAN_RESET:
      return initialState;

    default:
      return state;
  }
}
