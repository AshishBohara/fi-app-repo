import {
  GET_LOAN_CHARGES_VIEW,
  GET_LOAN_CHARGES_VIEW_SUCCESS,
  GET_LOAN_CHARGES_VIEW_FAIL,
  GET_LOAN_CHARGES_VIEW_RESET,
} from "../action/getLoanChargesViewAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
  loanCharge: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LOAN_CHARGES_VIEW:
      return {
        ...state,
        apiState: "loading",
      };

    case GET_LOAN_CHARGES_VIEW_SUCCESS:
      return {
        ...state,
        apiState: "success",
        message: action.response.data.message,
        loanCharge: action.response.data.data,
      };

    case GET_LOAN_CHARGES_VIEW_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case GET_LOAN_CHARGES_VIEW_RESET:
      return initialState;

    default:
      return state;
  }
}
