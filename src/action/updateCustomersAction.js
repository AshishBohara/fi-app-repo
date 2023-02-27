export const UPDATE_CUSTOMERS = "UPDATE_CUSTOMERS";
export const UPDATE_CUSTOMERS_SUCCESS = "UPDATE_CUSTOMERS_SUCCESS";
export const UPDATE_CUSTOMERS_FAIL = "UPDATE_CUSTOMERS_FAIL";
export const UPDATE_CUSTOMERS_RESET = "UPDATE_CUSTOMERS_RESET";

export const updateCustomers = (params) => {
  return { type: UPDATE_CUSTOMERS, params };
};

export const updateCustomersSuccess = (response) => {
  return { type: UPDATE_CUSTOMERS_SUCCESS, response };
};

export const updateCustomersFail = (response) => {
  return { type: UPDATE_CUSTOMERS_FAIL, response };
};

export const updateCustomersReset = () => {
  return { type: UPDATE_CUSTOMERS_RESET };
};
