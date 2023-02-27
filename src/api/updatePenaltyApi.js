import cnf from "../config";
import axios from "axios";

export const updatePenaltyApi = async (params) => {
  const response = await axios({
    method: "put",
    url: `${cnf.api.base_url}penalty/update`,
    data: params,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return response;
};

export default updatePenaltyApi;
