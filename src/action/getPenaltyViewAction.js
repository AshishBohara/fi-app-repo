export const GET_PENALTY_VIEW = "GET_PENALTY_VIEW";
export const GET_PENALTY_VIEW_SUCCESS = "GET_PENALTY_VIEW_SUCCESS";
export const GET_PENALTY_VIEW_FAIL = "GET_PENALTY_VIEW_FAIL";
export const GET_PENALTY_VIEW_RESET = "GET_PENALTY_VIEW_RESET";

export const getPenaltyView = (params) => {
  return { type: GET_PENALTY_VIEW, params };
};

export const getPenaltyViewSuccess = (response) => {
  return { type: GET_PENALTY_VIEW_SUCCESS, response };
};

export const getPenaltyViewFail = (response) => {
  return { type: GET_PENALTY_VIEW_FAIL, response };
};

export const getPenaltyViewReset = () => {
  return { type: GET_PENALTY_VIEW_RESET };
};
