import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, InputNumber, message, DatePicker } from "antd";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
/* custom component */
import { PageContainer } from "../../../Xcomponent";

/* actions */
import {
  updateInterestRate,
  updateInterestRateReset,
} from "../../../../action/updateInterestRateAction";
import {
  getInterestRateView,
  getInterestRateViewReset,
} from "../../../../action/getInterestRateViewAction";
const InterestRateEdit = (props) => {
  /* variables */
  const { interest_rate_id } = useParams();
  const navigate = useNavigate();
  const {
    updateInterestRate,
    updateInterestRateReset,
    updateInterestRateState,
    getInterestRateView,
    getInterestRateViewReset,
    getInterestRateViewState,
  } = props;
  const [formData, setFormData] = useState({
    interest_rate_id: interest_rate_id,
    interestRate: "",
  });
  const [form] = Form.useForm();

  /* callbacks */
  useEffect(() => {
    return () => {
      getInterestRateViewReset();
      updateInterestRateReset();
    };
  }, []);
  useEffect(() => {
    getInterestRateView({
      interest_rate_id: interest_rate_id,
    });
  }, []);
  useEffect(() => {
    if (getInterestRateViewState.apiState === "success") {
      form.setFieldsValue({
        interestRate: getInterestRateViewState.interest_rate.interestRate,
      });
      setFormData({
        ...formData,
        ["interestRate"]: getInterestRateViewState.interest_rate.interestRate,
      });
    }
  }, [getInterestRateViewState]);

  useEffect(() => {
    form.setFieldsValue({
      interestRate: "",
    });
  }, []);

  useEffect(() => {
    if (updateInterestRateState.apiState === "success") {
      message.success(updateInterestRateState.message);
      navigate("/interest_rate/list");
    }

    if (updateInterestRateState.apiState === "error") {
      updateInterestRateReset();
      message.error(updateInterestRateState.message);
    }
  }, [updateInterestRateState]);

  /* functions */
  const handleNumberChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    updateInterestRate(formData);
  };

  return (
    <>
      <PageContainer>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Row gutter="24">
            <Col span="6">
              <Form.Item
                label="interestRate"
                name="interestRate"
                rules={[{ required: true, message: "Required" }]}
              >
                <InputNumber
                  name="interestRate"
                  placeholder="Enter interest rate"
                  style={{ width: "100%" }}
                  min={0}
                  onChange={(v) => handleNumberChange("interestRate", v)}
                />
              </Form.Item>
            </Col>
          </Row>

          <Button
            type="primary"
            htmlType="submit"
            loading={updateInterestRateState.apiState === "loading"}
          >
            SUBMIT
          </Button>
        </Form>
      </PageContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  updateInterestRateState: state.updateInterestRate,
  getInterestRateViewState: state.getInterestRateView,
});

const mapDispatchToProps = (dispatch) => ({
  updateInterestRate: (params) => dispatch(updateInterestRate(params)),
  updateInterestRateReset: () => dispatch(updateInterestRateReset()),
  getInterestRateView: (params) => dispatch(getInterestRateView(params)),
  getInterestRateViewReset: () => dispatch(getInterestRateViewReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InterestRateEdit);
