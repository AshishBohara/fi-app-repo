export const UPDATE_LOAN_CHARGES = "UPDATE_LOAN_CHARGES";
export const UPDATE_LOAN_CHARGES_SUCCESS = "UPDATE_LOAN_CHARGES_SUCCESS";
export const UPDATE_LOAN_CHARGES_FAIL = "UPDATE_LOAN_CHARGES_FAIL";
export const UPDATE_LOAN_CHARGES_RESET = "UPDATE_LOAN_CHARGES_RESET";

export const updateLoanCharges = (params) => {
  return { type: UPDATE_LOAN_CHARGES, params };
};

export const updateLoanChargesSuccess = (response) => {
  return { type: UPDATE_LOAN_CHARGES_SUCCESS, response };
};

export const updateLoanChargesFail = (response) => {
  return { type: UPDATE_LOAN_CHARGES_FAIL, response };
};

export const updateLoanChargesReset = () => {
  return { type: UPDATE_LOAN_CHARGES_RESET };
};
