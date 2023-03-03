import cnf from "../config";
import axios from "axios";
import { getCustomerToken } from "../utils";

export const createLoanChargesApi = async (params) => {
  const response = await axios({
    method: "post",
    url: `${cnf.api.base_url}loan-charges/create`,
    data: params,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${getCustomerToken()}`,
    },
  });

  return response;
};

export default createLoanChargesApi;
