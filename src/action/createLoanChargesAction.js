export const CREATE_LOAN_CHARGES = "CREATE_LOAN_CHARGES";
export const CREATE_LOAN_CHARGES_SUCCESS = "CREATE_LOAN_CHARGES_SUCCESS";
export const CREATE_LOAN_CHARGES_FAIL = "CREATE_LOAN_CHARGES_FAIL";
export const CREATE_LOAN_CHARGES_RESET = "CREATE_LOAN_CHARGES_RESET";

export const createLoanCharges = (params) => {
  return { type: CREATE_LOAN_CHARGES, params };
};

export const createLoanChargesSuccess = (response) => {
  return { type: CREATE_LOAN_CHARGES_SUCCESS, response };
};

export const createLoanChargesFail = (response) => {
  return { type: CREATE_LOAN_CHARGES_FAIL, response };
};

export const createLoanChargesReset = () => {
  return { type: CREATE_LOAN_CHARGES_RESET };
};
