export const GET_CUSTOMER_INSTALLMENT_LIST = "GET_CUSTOMER_INSTALLMENT_LIST";
export const GET_CUSTOMER_INSTALLMENT_LIST_SUCCESS =
  "GET_CUSTOMER_INSTALLMENT_LIST_SUCCESS";
export const GET_CUSTOMER_INSTALLMENT_LIST_FAIL =
  "GET_CUSTOMER_INSTALLMENT_LIST_FAIL";
export const GET_CUSTOMER_INSTALLMENT_LIST_RESET =
  "GET_CUSTOMER_INSTALLMENT_LIST_RESET";

export const getCustomerInstallmentList = (params) => {
  return { type: GET_CUSTOMER_INSTALLMENT_LIST, params };
};

export const getCustomerInstallmentListSuccess = (response) => {
  return { type: GET_CUSTOMER_INSTALLMENT_LIST_SUCCESS, response };
};

export const getCustomerInstallmentListFail = (response) => {
  return { type: GET_CUSTOMER_INSTALLMENT_LIST_FAIL, response };
};

export const getCustomerInstallmentListReset = () => {
  return { type: GET_CUSTOMER_INSTALLMENT_LIST_RESET };
};
