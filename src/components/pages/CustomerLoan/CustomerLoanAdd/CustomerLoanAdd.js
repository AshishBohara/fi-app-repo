import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, InputNumber, message, DatePicker } from "antd";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

/* custom component */
import { PageContainer } from "../../../Xcomponent";

/* actions */
import {
  addCustomerLoan,
  addCustomerLoanReset,
} from "../../../../action/addCustomerLoanAction";
import {
  getInterestRateList,
  getInterestRateListReset,
} from "../../../../action/getInterestRateListAction";
import {
  getPenaltyList,
  getPenaltyListReset,
} from "../../../../action/getPenaltyListAction";
import {
  getLoanChargesList,
  getLoanChargesListReset,
} from "../../../../action/getLoanChargesListAction";

import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";

const CustomerLoanAdd = (props) => {
  /* variables */
  const navigate = useNavigate();
  const { customer_id } = useParams();
  const {
    addCustomerLoan,
    addCustomerLoanReset,
    addCustomerLoanState,
    getInterestRateList,
    getInterestRateListReset,
    getInterestRateListState,
    getPenaltyList,
    getPenaltyListReset,
    getPenaltyListState,
    getLoanChargesList,
    getLoanChargesListReset,
    getLoanChargesListState,
  } = props;
  const [formData, setFormData] = useState({
    interestRate: 0,
    penaltyAmount: 0,
    loanCharges: {},
    loanAmount: 0,
    noOfInstallment: 0,
    loanDate: "",
    customerId: customer_id,
  });
  const [form] = Form.useForm();

  /* callbacks */
  useEffect(() => {
    getInterestRateList();

    return () => {
      addCustomerLoanReset();
      getInterestRateListReset();
      getPenaltyListReset();
      getLoanChargesListReset();
    };
  }, []);

  useEffect(() => {
    if (getInterestRateListState.apiState === "success") {
      form.setFieldsValue({
        interestRate: getInterestRateListState.list[0].interestRate,
      });
      setFormData({
        ...formData,
        ["interestRate"]: getInterestRateListState.list[0].interestRate,
      });
      getPenaltyList();
    }
  }, [getInterestRateListState]);

  useEffect(() => {
    if (getPenaltyListState.apiState === "success") {
      form.setFieldsValue({
        penaltyAmount: getPenaltyListState.list[0].amount,
      });
      setFormData({
        ...formData,
        ["penaltyAmount"]: getPenaltyListState.list[0].amount,
      });
      getLoanChargesList();
    }
  }, [getPenaltyListState]);

  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);

  useEffect(() => {
    if (getLoanChargesListState.apiState === "success") {
      let obj = {};
      getLoanChargesListState.list.map((row) => {
        if (!row.isDeleted) {
          Object.assign(obj, { [row.chargesName]: row.amount });
        }
      });
      let total = sumValues(obj);
      form.setFieldsValue({ ...obj, totalLoanCharges: total });
      setFormData({
        ...formData,
        ["loanCharges"]: obj,
        ["totalLoanCharges"]: total,
      });
    }
  }, [getLoanChargesListState]);

  useEffect(() => {
    if (addCustomerLoanState.apiState === "success") {
      message.success(addCustomerLoanState.message);
      navigate(`/customers/${customer_id}/loan-list`);
    }

    if (addCustomerLoanState.apiState === "error") {
      addCustomerLoanReset();
      message.error(addCustomerLoanState.message);
    }
  }, [addCustomerLoanState]);

  /* functions */
  const handleNumberChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChangeOfCharges = (name, value) => {
    let charges = formData.loanCharges;
    charges[name] = value;
    setFormData({ ...formData, ["loanCharges"]: charges });
    let total = sumValues(charges);
    form.setFieldsValue({ totalLoanCharges: total });
    setFormData({
      ...formData,
      ["totalLoanCharges"]: total,
    });
  };

  const handleSubmit = () => {
    addCustomerLoan(formData);
  };

  const handleDatePickerChange = (date, dateString) => {
    setFormData({ ...formData, ["loanDate"]: date });
  };

  return (
    <>
      <HeaderComponent title="Customer Add New Loan" />
      <PageContainer>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Row gutter="24">
            <Col span="6">
              <Form.Item
                label="Loan Amount"
                name="loanAmount"
                rules={[{ required: true, message: "Required" }]}
              >
                <InputNumber
                  name="loanAmount"
                  placeholder="Enter Loan Amount"
                  style={{ width: "100%" }}
                  onChange={(v) => handleNumberChange("loanAmount", v)}
                />
              </Form.Item>
            </Col>
            <Col span="6">
              <Form.Item
                label="No. of Installment"
                name="noOfInstallment"
                rules={[{ required: true, message: "Required" }]}
              >
                <InputNumber
                  name="noOfInstallment"
                  placeholder="Enter No. of Installment"
                  style={{ width: "100%" }}
                  onChange={(v) => handleNumberChange("noOfInstallment", v)}
                />
              </Form.Item>
            </Col>
            <Col span="6">
              <Form.Item
                label="Loan Interest Rate"
                name="interestRate"
                rules={[{ required: true, message: "Required" }]}
              >
                <InputNumber
                  name="interestRate"
                  placeholder="Enter Loan Interest Rate"
                  style={{ width: "100%" }}
                  onChange={(v) => handleNumberChange("interestRate", v)}
                />
              </Form.Item>
            </Col>
            <Col span="6">
              <Form.Item
                label="Installment Penalty Amount"
                name="penaltyAmount"
                rules={[{ required: true, message: "Required" }]}
              >
                <InputNumber
                  name="penaltyAmount"
                  placeholder="Enter Penalty Amount"
                  style={{ width: "100%" }}
                  onChange={(v) => handleNumberChange("penaltyAmount", v)}
                />
              </Form.Item>
            </Col>

            <Col span="6">
              <Form.Item
                label="Loan Date"
                name="loanDate"
                rules={[{ required: true, message: "Required" }]}
              >
                <DatePicker
                  format="DD-MM-YYYY"
                  onChange={handleDatePickerChange}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            {getLoanChargesListState.list.map(
              (row, index) =>
                !row.isDeleted && (
                  <>
                    <Col span="6" key={row.chargesName}>
                      <Form.Item
                        key={row.chargesName}
                        label={row.chargesName}
                        name={row.chargesName}
                        rules={[{ required: true, message: "Required" }]}
                      >
                        <InputNumber
                          key={row.chargesName}
                          name={row.chargesName}
                          placeholder={`Enter ${row.chargesName}`}
                          style={{ width: "100%" }}
                          onChange={(v) =>
                            handleNumberChangeOfCharges(row.chargesName, v)
                          }
                        />
                      </Form.Item>
                    </Col>
                  </>
                )
            )}
            <Col span="6">
              <Form.Item
                label="Total Loan Charges"
                name="totalLoanCharges"
                rules={[{ required: true, message: "Required" }]}
              >
                <InputNumber
                  name="totalLoanCharges"
                  placeholder="Enter Total Loan Charges"
                  style={{ width: "100%" }}
                  readOnly
                />
              </Form.Item>
            </Col>
          </Row>

          <Button
            type="primary"
            htmlType="submit"
            loading={addCustomerLoanState.apiState === "loading"}
          >
            SUBMIT
          </Button>
        </Form>
      </PageContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  addCustomerLoanState: state.addCustomerLoan,
  getInterestRateListState: state.getInterestRateList,
  getPenaltyListState: state.getPenaltyList,
  getLoanChargesListState: state.getLoanChargesList,
});

const mapDispatchToProps = (dispatch) => ({
  addCustomerLoan: (params) => dispatch(addCustomerLoan(params)),
  addCustomerLoanReset: () => dispatch(addCustomerLoanReset()),
  getInterestRateList: (params) => dispatch(getInterestRateList(params)),
  getInterestRateListReset: () => dispatch(getInterestRateListReset()),
  getPenaltyList: (params) => dispatch(getPenaltyList(params)),
  getPenaltyListReset: () => dispatch(getPenaltyListReset()),
  getLoanChargesList: (params) => dispatch(getLoanChargesList(params)),
  getLoanChargesListReset: () => dispatch(getLoanChargesListReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerLoanAdd);
