import {
  UPDATE_CUSTOMERS,
  UPDATE_CUSTOMERS_SUCCESS,
  UPDATE_CUSTOMERS_FAIL,
  UPDATE_CUSTOMERS_RESET,
} from "../action/updateCustomersAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CUSTOMERS:
      return {
        ...state,
        apiState: "loading",
      };

    case UPDATE_CUSTOMERS_SUCCESS:
      return {
        ...state,
        apiState: "success",
        message: action.response.data.message,
      };

    case UPDATE_CUSTOMERS_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case UPDATE_CUSTOMERS_RESET:
      return initialState;

    default:
      return state;
  }
}
