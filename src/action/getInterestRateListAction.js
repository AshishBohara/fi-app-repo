export const GET_INTEREST_RATE_LIST = "GET_INTEREST_RATE_LIST";
export const GET_INTEREST_RATE_LIST_SUCCESS = "GET_INTEREST_RATE_LIST_SUCCESS";
export const GET_INTEREST_RATE_LIST_FAIL = "GET_INTEREST_RATE_LIST_FAIL";
export const GET_INTEREST_RATE_LIST_RESET = "GET_INTEREST_RATE_LIST_RESET";

export const getInterestRateList = (params) => {
  return { type: GET_INTEREST_RATE_LIST, params };
};

export const getInterestRateListSuccess = (response) => {
  return { type: GET_INTEREST_RATE_LIST_SUCCESS, response };
};

export const getInterestRateListFail = (response) => {
  return { type: GET_INTEREST_RATE_LIST_FAIL, response };
};

export const getInterestRateListReset = () => {
  return { type: GET_INTEREST_RATE_LIST_RESET };
};
