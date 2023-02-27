export const GET_PENALTY_LIST = "GET_PENALTY_LIST";
export const GET_PENALTY_LIST_SUCCESS = "GET_PENALTY_LIST_SUCCESS";
export const GET_PENALTY_LIST_FAIL = "GET_PENALTY_LIST_FAIL";
export const GET_PENALTY_LIST_RESET = "GET_PENALTY_LIST_RESET";

export const getPenaltyList = (params) => {
  return { type: GET_PENALTY_LIST, params };
};

export const getPenaltyListSuccess = (response) => {
  return { type: GET_PENALTY_LIST_SUCCESS, response };
};

export const getPenaltyListFail = (response) => {
  return { type: GET_PENALTY_LIST_FAIL, response };
};

export const getPenaltyListReset = () => {
  return { type: GET_PENALTY_LIST_RESET };
};
