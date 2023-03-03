export const INSTALLMENT_PAYMENT = "INSTALLMENT_PAYMENT";
export const INSTALLMENT_PAYMENT_SUCCESS = "INSTALLMENT_PAYMENT_SUCCESS";
export const INSTALLMENT_PAYMENT_FAIL = "INSTALLMENT_PAYMENT_FAIL";
export const INSTALLMENT_PAYMENT_RESET = "INSTALLMENT_PAYMENT_RESET";

export const installmentPayment = (params) => {
  return { type: INSTALLMENT_PAYMENT, params };
};

export const installmentPaymentSuccess = (response) => {
  return { type: INSTALLMENT_PAYMENT_SUCCESS, response };
};

export const installmentPaymentFail = (response) => {
  return { type: INSTALLMENT_PAYMENT_FAIL, response };
};

export const installmentPaymentReset = () => {
  return { type: INSTALLMENT_PAYMENT_RESET };
};
