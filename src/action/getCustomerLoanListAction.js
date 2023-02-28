export const GET_CUSTOMER_LOAN_LIST = "GET_CUSTOMER_LOAN_LIST";
export const GET_CUSTOMER_LOAN_LIST_SUCCESS = "GET_CUSTOMER_LOAN_LIST_SUCCESS";
export const GET_CUSTOMER_LOAN_LIST_FAIL = "GET_CUSTOMER_LOAN_LIST_FAIL";
export const GET_CUSTOMER_LOAN_LIST_RESET = "GET_CUSTOMER_LOAN_LIST_RESET";

export const getCustomerLoanList = (params) => {
  return { type: GET_CUSTOMER_LOAN_LIST, params };
};

export const getCustomerLoanListSuccess = (response) => {
  return { type: GET_CUSTOMER_LOAN_LIST_SUCCESS, response };
};

export const getCustomerLoanListFail = (response) => {
  return { type: GET_CUSTOMER_LOAN_LIST_FAIL, response };
};

export const getCustomerLoanListReset = () => {
  return { type: GET_CUSTOMER_LOAN_LIST_RESET };
};
