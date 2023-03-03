import cnf from "../config";
import axios from "axios";
import { getCustomerToken } from "../utils";

export const getInterestRateViewApi = async (params) => {
  const response = await axios({
    method: "get",
    url: `${cnf.api.base_url}interest-rate/view`,
    params: params,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${getCustomerToken()}`,
    },
  });

  return response;
};

export default getInterestRateViewApi;
