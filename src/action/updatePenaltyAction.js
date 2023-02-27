export const UPDATE_PENALTY = "UPDATE_PENALTY";
export const UPDATE_PENALTY_SUCCESS = "UPDATE_PENALTY_SUCCESS";
export const UPDATE_PENALTY_FAIL = "UPDATE_PENALTY_FAIL";
export const UPDATE_PENALTY_RESET = "UPDATE_PENALTY_RESET";

export const updatePenalty = (params) => {
  return { type: UPDATE_PENALTY, params };
};

export const updatePenaltySuccess = (response) => {
  return { type: UPDATE_PENALTY_SUCCESS, response };
};

export const updatePenaltyFail = (response) => {
  return { type: UPDATE_PENALTY_FAIL, response };
};

export const updatePenaltyReset = () => {
  return { type: UPDATE_PENALTY_RESET };
};
