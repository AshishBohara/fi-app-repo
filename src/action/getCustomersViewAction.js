export const GET_CUSTOMERS_VIEW = "GET_CUSTOMERS_VIEW";
export const GET_CUSTOMERS_VIEW_SUCCESS = "GET_CUSTOMERS_VIEW_SUCCESS";
export const GET_CUSTOMERS_VIEW_FAIL = "GET_CUSTOMERS_VIEW_FAIL";
export const GET_CUSTOMERS_VIEW_RESET = "GET_CUSTOMERS_VIEW_RESET";

export const getCustomersView = (params) => {
  return { type: GET_CUSTOMERS_VIEW, params };
};

export const getCustomersViewSuccess = (response) => {
  return { type: GET_CUSTOMERS_VIEW_SUCCESS, response };
};

export const getCustomersViewFail = (response) => {
  return { type: GET_CUSTOMERS_VIEW_FAIL, response };
};

export const getCustomersViewReset = () => {
  return { type: GET_CUSTOMERS_VIEW_RESET };
};
