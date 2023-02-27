import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, InputNumber, message, Input } from "antd";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

/* custom component */
import { PageContainer } from "../../../Xcomponent";

/* actions */
import {
  createCustomers,
  createCustomersReset,
} from "../../../../action/createCustomersAction";
import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";
const CustomersAdd = (props) => {
  /* variables */
  const navigate = useNavigate();
  const { createCustomers, createCustomersReset, createCustomersState } = props;
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    mobileNumber: "",
  });
  const [form] = Form.useForm();

  /* callbacks */
  useEffect(() => {
    return () => {
      createCustomersReset();
    };
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      name: "",
      fatherName: "",
      mobileNumber: "",
    });
  }, []);

  useEffect(() => {
    if (createCustomersState.apiState === "success") {
      message.success(createCustomersState.message);
      navigate("/customers/list");
    }

    if (createCustomersState.apiState === "error") {
      createCustomersReset();
      message.error(createCustomersState.message);
    }
  }, [createCustomersState]);

  /* functions */
  const handleNumberChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    createCustomers(formData);
  };

  return (
    <>
      <HeaderComponent title="Customer Add" />
      <PageContainer>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Row gutter="24">
            <Col span="6">
              <Form.Item
                label="Customer Name"
                name="name"
                rules={[{ required: true, message: "Required" }]}
              >
                <Input
                  name="name"
                  placeholder="Enter Customer Name"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ["name"]: e.target.value,
                    })
                  }
                />
              </Form.Item>
            </Col>
            <Col span="6">
              <Form.Item
                label="Father Name"
                name="fatherName"
                rules={[{ required: true, message: "Required" }]}
              >
                <Input
                  name="fatherName"
                  placeholder="Enter Father Name"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ["fatherName"]: e.target.value,
                    })
                  }
                />
              </Form.Item>
            </Col>
            <Col span="6">
              <Form.Item
                label="Mobile Number"
                name="mobileNumber"
                rules={[{ required: true, message: "Required" }]}
              >
                <InputNumber
                  name="mobileNumber"
                  placeholder="Enter Mobile Number"
                  style={{ width: "100%" }}
                  onChange={(v) => handleNumberChange("mobileNumber", v)}
                />
              </Form.Item>
            </Col>
          </Row>

          <Button
            type="primary"
            htmlType="submit"
            loading={createCustomersState.apiState === "loading"}
          >
            SUBMIT
          </Button>
        </Form>
      </PageContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  createCustomersState: state.createCustomers,
});

const mapDispatchToProps = (dispatch) => ({
  createCustomers: (params) => dispatch(createCustomers(params)),
  createCustomersReset: () => dispatch(createCustomersReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomersAdd);
