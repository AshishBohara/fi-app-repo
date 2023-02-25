export const GET_INTEREST_RATE_VIEW = "GET_INTEREST_RATE_VIEW";
export const GET_INTEREST_RATE_VIEW_SUCCESS = "GET_INTEREST_RATE_VIEW_SUCCESS";
export const GET_INTEREST_RATE_VIEW_FAIL = "GET_INTEREST_RATE_VIEW_FAIL";
export const GET_INTEREST_RATE_VIEW_RESET = "GET_INTEREST_RATE_VIEW_RESET";

export const getInterestRateView = (params) => {
  return { type: GET_INTEREST_RATE_VIEW, params };
};

export const getInterestRateViewSuccess = (response) => {
  return { type: GET_INTEREST_RATE_VIEW_SUCCESS, response };
};

export const getInterestRateViewFail = (response) => {
  return { type: GET_INTEREST_RATE_VIEW_FAIL, response };
};

export const getInterestRateViewReset = () => {
  return { type: GET_INTEREST_RATE_VIEW_RESET };
};
