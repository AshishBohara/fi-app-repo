export const UPDATE_INTEREST_RATE = "UPDATE_INTEREST_RATE";
export const UPDATE_INTEREST_RATE_SUCCESS = "UPDATE_INTEREST_RATE_SUCCESS";
export const UPDATE_INTEREST_RATE_FAIL = "UPDATE_INTEREST_RATE_FAIL";
export const UPDATE_INTEREST_RATE_RESET = "UPDATE_INTEREST_RATE_RESET";

export const updateInterestRate = (params) => {
  return { type: UPDATE_INTEREST_RATE, params };
};

export const updateInterestRateSuccess = (response) => {
  return { type: UPDATE_INTEREST_RATE_SUCCESS, response };
};

export const updateInterestRateFail = (response) => {
  return { type: UPDATE_INTEREST_RATE_FAIL, response };
};

export const updateInterestRateReset = () => {
  return { type: UPDATE_INTEREST_RATE_RESET };
};
