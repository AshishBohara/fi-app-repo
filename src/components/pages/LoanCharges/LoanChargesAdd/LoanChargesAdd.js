import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, InputNumber, message, Input } from "antd";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

/* custom component */
import { PageContainer } from "../../../Xcomponent";

/* actions */
import {
  createLoanCharges,
  createLoanChargesReset,
} from "../../../../action/createLoanChargesAction";
import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";
const LoanChargesAdd = (props) => {
  /* variables */
  const navigate = useNavigate();
  const { createLoanCharges, createLoanChargesReset, createLoanChargesState } =
    props;
  const [formData, setFormData] = useState({
    chargesName: "",
    amount: "",
  });
  const [form] = Form.useForm();

  /* callbacks */
  useEffect(() => {
    return () => {
      createLoanChargesReset();
    };
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      chargesName: "",
      amount: "",
    });
  }, []);

  useEffect(() => {
    if (createLoanChargesState.apiState === "success") {
      message.success(createLoanChargesState.message);
      navigate("/loan-charges/list");
    }

    if (createLoanChargesState.apiState === "error") {
      createLoanChargesReset();
      message.error(createLoanChargesState.message);
    }
  }, [createLoanChargesState]);

  /* functions */
  const handleNumberChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    createLoanCharges(formData);
  };

  return (
    <>
      <HeaderComponent title="Loan Charges Add" />
      <PageContainer>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Row gutter="24">
            <Col span="6">
              <Form.Item
                label="Charges Name"
                name="chargesName"
                rules={[{ required: true, message: "Required" }]}
              >
                <Input
                  name="chargesName"
                  placeholder="Enter Charges Name"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ["chargesName"]: e.target.value,
                    })
                  }
                />
              </Form.Item>
            </Col>
            <Col span="6">
              <Form.Item
                label="Charges Amount"
                name="amount"
                rules={[{ required: true, message: "Required" }]}
              >
                <InputNumber
                  name="amount"
                  placeholder="Enter Amount"
                  style={{ width: "100%" }}
                  min={0}
                  onChange={(v) => handleNumberChange("amount", v)}
                />
              </Form.Item>
            </Col>
          </Row>

          <Button
            type="primary"
            htmlType="submit"
            loading={createLoanChargesState.apiState === "loading"}
          >
            SUBMIT
          </Button>
        </Form>
      </PageContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  createLoanChargesState: state.createLoanCharges,
});

const mapDispatchToProps = (dispatch) => ({
  createLoanCharges: (params) => dispatch(createLoanCharges(params)),
  createLoanChargesReset: () => dispatch(createLoanChargesReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoanChargesAdd);
