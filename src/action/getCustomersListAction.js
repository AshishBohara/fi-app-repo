export const GET_CUSTOMERS_LIST = "GET_CUSTOMERS_LIST";
export const GET_CUSTOMERS_LIST_SUCCESS = "GET_CUSTOMERS_LIST_SUCCESS";
export const GET_CUSTOMERS_LIST_FAIL = "GET_CUSTOMERS_LIST_FAIL";
export const GET_CUSTOMERS_LIST_RESET = "GET_CUSTOMERS_LIST_RESET";

export const getCustomersList = (params) => {
  return { type: GET_CUSTOMERS_LIST, params };
};

export const getCustomersListSuccess = (response) => {
  return { type: GET_CUSTOMERS_LIST_SUCCESS, response };
};

export const getCustomersListFail = (response) => {
  return { type: GET_CUSTOMERS_LIST_FAIL, response };
};

export const getCustomersListReset = () => {
  return { type: GET_CUSTOMERS_LIST_RESET };
};
