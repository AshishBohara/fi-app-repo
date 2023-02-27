import React, { useState, useEffect } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  InputNumber,
  message,
  Input,
  Select,
} from "antd";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
/* custom component */
import { PageContainer } from "../../../Xcomponent";

/* actions */
import {
  updateLoanCharges,
  updateLoanChargesReset,
} from "../../../../action/updateLoanChargesAction";
import {
  getLoanChargesView,
  getLoanChargesViewReset,
} from "../../../../action/getLoanChargesViewAction";
import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";
const LoanChargesEdit = (props) => {
  /* variables */
  const { loan_charges_id } = useParams();
  const navigate = useNavigate();
  const {
    updateLoanCharges,
    updateLoanChargesReset,
    updateLoanChargesState,
    getLoanChargesView,
    getLoanChargesViewReset,
    getLoanChargesViewState,
  } = props;
  const [formData, setFormData] = useState({
    loan_charges_id: loan_charges_id,
    chargesName: "",
    amount: "",
    isDeleted: false,
  });
  const [form] = Form.useForm();

  /* callbacks */
  useEffect(() => {
    return () => {
      getLoanChargesViewReset();
      updateLoanChargesReset();
    };
  }, []);
  useEffect(() => {
    getLoanChargesView({
      loan_charges_id: loan_charges_id,
    });
  }, []);
  useEffect(() => {
    if (getLoanChargesViewState.apiState === "success") {
      form.setFieldsValue({
        chargesName: getLoanChargesViewState.loanCharge.chargesName,
        amount: getLoanChargesViewState.loanCharge.amount,
        isDeleted: getLoanChargesViewState.loanCharge.isDeleted,
      });
      setFormData({
        ...formData,
        ["chargesName"]: getLoanChargesViewState.loanCharge.chargesName,
        ["amount"]: getLoanChargesViewState.loanCharge.amount,
        ["isDeleted"]: getLoanChargesViewState.loanCharge.isDeleted,
      });
    }
  }, [getLoanChargesViewState]);

  useEffect(() => {
    form.setFieldsValue({
      chargesName: "",
      amount: "",
    });
  }, []);

  useEffect(() => {
    if (updateLoanChargesState.apiState === "success") {
      message.success(updateLoanChargesState.message);
      navigate("/loan-charges/list");
    }

    if (updateLoanChargesState.apiState === "error") {
      updateLoanChargesReset();
      message.error(updateLoanChargesState.message);
    }
  }, [updateLoanChargesState]);

  /* functions */
  const handleNumberChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    updateLoanCharges(formData);
  };

  return (
    <>
      <HeaderComponent title="Loan Charges Edit" />
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
          <Row gutter="24">
            <Col span="6">
              <Form.Item
                label="Status"
                name="isDeleted"
                rules={[{ required: true, message: "Required" }]}
              >
                <Select
                  name="isDeleted"
                  placeholder="Select Status"
                  onSelect={(v) => handleNumberChange("isDeleted", v)}
                >
                  <Select.Option key="active" value={false}>
                    Active
                  </Select.Option>
                  <Select.Option key="inactive" value={true}>
                    Inactive
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Button
            type="primary"
            htmlType="submit"
            loading={updateLoanChargesState.apiState === "loading"}
          >
            SUBMIT
          </Button>
        </Form>
      </PageContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  updateLoanChargesState: state.updateLoanCharges,
  getLoanChargesViewState: state.getLoanChargesView,
});

const mapDispatchToProps = (dispatch) => ({
  updateLoanCharges: (params) => dispatch(updateLoanCharges(params)),
  updateLoanChargesReset: () => dispatch(updateLoanChargesReset()),
  getLoanChargesView: (params) => dispatch(getLoanChargesView(params)),
  getLoanChargesViewReset: () => dispatch(getLoanChargesViewReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoanChargesEdit);
