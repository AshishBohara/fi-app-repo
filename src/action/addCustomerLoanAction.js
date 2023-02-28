export const ADD_CUSTOMER_LOAN = "ADD_CUSTOMER_LOAN";
export const ADD_CUSTOMER_LOAN_SUCCESS = "ADD_CUSTOMER_LOAN_SUCCESS";
export const ADD_CUSTOMER_LOAN_FAIL = "ADD_CUSTOMER_LOAN_FAIL";
export const ADD_CUSTOMER_LOAN_RESET = "ADD_CUSTOMER_LOAN_RESET";

export const addCustomerLoan = (params) => {
  return { type: ADD_CUSTOMER_LOAN, params };
};

export const addCustomerLoanSuccess = (response) => {
  return { type: ADD_CUSTOMER_LOAN_SUCCESS, response };
};

export const addCustomerLoanFail = (response) => {
  return { type: ADD_CUSTOMER_LOAN_FAIL, response };
};

export const addCustomerLoanReset = () => {
  return { type: ADD_CUSTOMER_LOAN_RESET };
};
