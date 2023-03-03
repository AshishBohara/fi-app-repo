import {
  INSTALLMENT_PAYMENT,
  INSTALLMENT_PAYMENT_SUCCESS,
  INSTALLMENT_PAYMENT_FAIL,
  INSTALLMENT_PAYMENT_RESET,
} from "../action/installmentPaymentAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INSTALLMENT_PAYMENT:
      return {
        ...state,
        apiState: "loading",
      };

    case INSTALLMENT_PAYMENT_SUCCESS:
      return {
        ...state,
        apiState: "success",
        message: action.response.data.message,
      };

    case INSTALLMENT_PAYMENT_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case INSTALLMENT_PAYMENT_RESET:
      return initialState;

    default:
      return state;
  }
}
