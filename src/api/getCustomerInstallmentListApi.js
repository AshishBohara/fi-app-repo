import conf from "../config";
import axios from "axios";
import { getCustomerToken } from "../utils";

export const getCustomerInstallmentListApi = async (params) => {
  const response = await axios({
    method: "get",
    url: `${conf.api.base_url}customer-loan/installment-list`,
    params: params,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${getCustomerToken()}`,
    },
  });

  return response;
};

export default getCustomerInstallmentListApi;
