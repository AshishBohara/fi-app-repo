export const GET_LOAN_CHARGES_VIEW = "GET_LOAN_CHARGES_VIEW";
export const GET_LOAN_CHARGES_VIEW_SUCCESS = "GET_LOAN_CHARGES_VIEW_SUCCESS";
export const GET_LOAN_CHARGES_VIEW_FAIL = "GET_LOAN_CHARGES_VIEW_FAIL";
export const GET_LOAN_CHARGES_VIEW_RESET = "GET_LOAN_CHARGES_VIEW_RESET";

export const getLoanChargesView = (params) => {
  return { type: GET_LOAN_CHARGES_VIEW, params };
};

export const getLoanChargesViewSuccess = (response) => {
  return { type: GET_LOAN_CHARGES_VIEW_SUCCESS, response };
};

export const getLoanChargesViewFail = (response) => {
  return { type: GET_LOAN_CHARGES_VIEW_FAIL, response };
};

export const getLoanChargesViewReset = () => {
  return { type: GET_LOAN_CHARGES_VIEW_RESET };
};
