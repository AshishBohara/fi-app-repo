import cnf from "../config";
import axios from "axios";
import { getCustomerToken } from "../utils";

export const getCustomersViewApi = async (params) => {
  const response = await axios({
    method: "get",
    url: `${cnf.api.base_url}customer/view`,
    params: params,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${getCustomerToken()}`,
    },
  });

  return response;
};

export default getCustomersViewApi;
