export const GET_LOAN_CHARGES_LIST = "GET_LOAN_CHARGES_LIST";
export const GET_LOAN_CHARGES_LIST_SUCCESS = "GET_LOAN_CHARGES_LIST_SUCCESS";
export const GET_LOAN_CHARGES_LIST_FAIL = "GET_LOAN_CHARGES_LIST_FAIL";
export const GET_LOAN_CHARGES_LIST_RESET = "GET_LOAN_CHARGES_LIST_RESET";

export const getLoanChargesList = (params) => {
  return { type: GET_LOAN_CHARGES_LIST, params };
};

export const getLoanChargesListSuccess = (response) => {
  return { type: GET_LOAN_CHARGES_LIST_SUCCESS, response };
};

export const getLoanChargesListFail = (response) => {
  return { type: GET_LOAN_CHARGES_LIST_FAIL, response };
};

export const getLoanChargesListReset = () => {
  return { type: GET_LOAN_CHARGES_LIST_RESET };
};
