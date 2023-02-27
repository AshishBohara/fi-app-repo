export const CREATE_CUSTOMERS = "CREATE_CUSTOMERS";
export const CREATE_CUSTOMERS_SUCCESS = "CREATE_CUSTOMERS_SUCCESS";
export const CREATE_CUSTOMERS_FAIL = "CREATE_CUSTOMERS_FAIL";
export const CREATE_CUSTOMERS_RESET = "CREATE_CUSTOMERS_RESET";

export const createCustomers = (params) => {
  return { type: CREATE_CUSTOMERS, params };
};

export const createCustomersSuccess = (response) => {
  return { type: CREATE_CUSTOMERS_SUCCESS, response };
};

export const createCustomersFail = (response) => {
  return { type: CREATE_CUSTOMERS_FAIL, response };
};

export const createCustomersReset = () => {
  return { type: CREATE_CUSTOMERS_RESET };
};
