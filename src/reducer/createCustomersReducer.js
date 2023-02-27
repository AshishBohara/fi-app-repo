import {
  CREATE_CUSTOMERS,
  CREATE_CUSTOMERS_SUCCESS,
  CREATE_CUSTOMERS_FAIL,
  CREATE_CUSTOMERS_RESET,
} from "../action/createCustomersAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_CUSTOMERS:
      return {
        ...state,
        apiState: "loading",
      };

    case CREATE_CUSTOMERS_SUCCESS:
      return {
        ...state,
        apiState: "success",
        message: action.response.data.message,
      };

    case CREATE_CUSTOMERS_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case CREATE_CUSTOMERS_RESET:
      return initialState;

    default:
      return state;
  }
}
