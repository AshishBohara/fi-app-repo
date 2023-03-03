import conf from "../config";
import axios from "axios";

export const loginApi = async (params) => {
  const response = await axios({
    method: "post",
    url: `${conf.api.base_url}user/login`,
    data: {
      mobileNumber: params.mobileNumber,
      password: params.password,
    },
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return response;
};

export default loginApi;
