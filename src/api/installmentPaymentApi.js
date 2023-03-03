import cnf from "../config";
import axios from "axios";
import { getCustomerToken } from "../utils";

export const installmentPaymentApi = async (params) => {
  const response = await axios({
    method: "put",
    url: `${cnf.api.base_url}customer-loan/installment-payment`,
    data: params,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${getCustomerToken()}`,
    },
  });

  return response;
};

export default installmentPaymentApi;
