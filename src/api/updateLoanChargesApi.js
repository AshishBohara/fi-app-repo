import cnf from "../config";
import axios from "axios";

export const updateLoanChargesApi = async (params) => {
  const response = await axios({
    method: "put",
    url: `${cnf.api.base_url}loan-charges/update`,
    data: params,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return response;
};

export default updateLoanChargesApi;
