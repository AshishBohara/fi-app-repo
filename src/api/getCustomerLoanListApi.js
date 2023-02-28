import conf from "../config";

import axios from "axios";

export const getCustomerLoanListApi = async (params) => {
  const response = await axios({
    method: "get",
    url: `${conf.api.base_url}customer-loan/list`,
    params: params,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return response;
};

export default getCustomerLoanListApi;
