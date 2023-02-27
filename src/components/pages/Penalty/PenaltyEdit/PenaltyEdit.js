import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, InputNumber, message } from "antd";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
/* custom component */
import { PageContainer } from "../../../Xcomponent";

/* actions */
import {
  updatePenalty,
  updatePenaltyReset,
} from "../../../../action/updatePenaltyAction";
import {
  getPenaltyView,
  getPenaltyViewReset,
} from "../../../../action/getPenaltyViewAction";
import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";
const PenaltyEdit = (props) => {
  /* variables */
  const { penalty_id } = useParams();
  const navigate = useNavigate();
  const {
    updatePenalty,
    updatePenaltyReset,
    updatePenaltyState,
    getPenaltyView,
    getPenaltyViewReset,
    getPenaltyViewState,
  } = props;
  const [formData, setFormData] = useState({
    penalty_id: penalty_id,
    amount: "",
  });
  const [form] = Form.useForm();

  /* callbacks */
  useEffect(() => {
    return () => {
      getPenaltyViewReset();
      updatePenaltyReset();
    };
  }, []);
  useEffect(() => {
    getPenaltyView({
      penalty_id: penalty_id,
    });
  }, []);
  useEffect(() => {
    if (getPenaltyViewState.apiState === "success") {
      form.setFieldsValue({
        amount: getPenaltyViewState.penalty.amount,
      });
      setFormData({
        ...formData,
        ["amount"]: getPenaltyViewState.penalty.amount,
      });
    }
  }, [getPenaltyViewState]);

  useEffect(() => {
    form.setFieldsValue({
      amount: "",
    });
  }, []);

  useEffect(() => {
    if (updatePenaltyState.apiState === "success") {
      message.success(updatePenaltyState.message);
      navigate("/penalty/list");
    }

    if (updatePenaltyState.apiState === "error") {
      updatePenaltyReset();
      message.error(updatePenaltyState.message);
    }
  }, [updatePenaltyState]);

  /* functions */
  const handleNumberChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    updatePenalty(formData);
  };

  return (
    <>
      <HeaderComponent title="Penalty Edit" />
      <PageContainer>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Row gutter="24">
            <Col span="6">
              <Form.Item
                label="Amount"
                name="amount"
                rules={[{ required: true, message: "Required" }]}
              >
                <InputNumber
                  name="amount"
                  placeholder="Enter interest rate"
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
            loading={updatePenaltyState.apiState === "loading"}
          >
            SUBMIT
          </Button>
        </Form>
      </PageContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  updatePenaltyState: state.updatePenalty,
  getPenaltyViewState: state.getPenaltyView,
});

const mapDispatchToProps = (dispatch) => ({
  updatePenalty: (params) => dispatch(updatePenalty(params)),
  updatePenaltyReset: () => dispatch(updatePenaltyReset()),
  getPenaltyView: (params) => dispatch(getPenaltyView(params)),
  getPenaltyViewReset: () => dispatch(getPenaltyViewReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PenaltyEdit);
