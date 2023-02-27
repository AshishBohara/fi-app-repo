import {
  GET_CUSTOMERS_VIEW,
  GET_CUSTOMERS_VIEW_SUCCESS,
  GET_CUSTOMERS_VIEW_FAIL,
  GET_CUSTOMERS_VIEW_RESET,
} from "../action/getCustomersViewAction";
import strings from "../strings.json";

const initialState = {
  apiState: "", // loading, success, error
  message: "",
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERS_VIEW:
      return {
        ...state,
        apiState: "loading",
      };

    case GET_CUSTOMERS_VIEW_SUCCESS:
      return {
        ...state,
        apiState: "success",
        message: action.response.data.message,
        data: action.response.data.data,
      };

    case GET_CUSTOMERS_VIEW_FAIL:
      return {
        ...state,
        apiState: "error",
        message:
          (action.response &&
            action.response.data &&
            action.response.data.message) ||
          strings.api_err_msg,
      };

    case GET_CUSTOMERS_VIEW_RESET:
      return initialState;

    default:
      return state;
  }
}
