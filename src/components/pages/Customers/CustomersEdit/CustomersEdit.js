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
  updateCustomers,
  updateCustomersReset,
} from "../../../../action/updateCustomersAction";
import {
  getCustomersView,
  getCustomersViewReset,
} from "../../../../action/getCustomersViewAction";
import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";
const CustomersEdit = (props) => {
  /* variables */
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    updateCustomers,
    updateCustomersReset,
    updateCustomersState,
    getCustomersView,
    getCustomersViewReset,
    getCustomersViewState,
  } = props;
  const [formData, setFormData] = useState({
    id: id,
    name: "",
    mobileNumber: "",
    fatherName: "",
  });
  const [form] = Form.useForm();

  /* callbacks */
  useEffect(() => {
    return () => {
      getCustomersViewReset();
      updateCustomersReset();
    };
  }, []);
  useEffect(() => {
    getCustomersView({
      id: id,
    });
  }, []);
  useEffect(() => {
    if (getCustomersViewState.apiState === "success") {
      form.setFieldsValue({
        name: getCustomersViewState.data.name,
        mobileNumber: getCustomersViewState.data.mobileNumber,
        fatherName: getCustomersViewState.data.fatherName,
      });
      setFormData({
        ...formData,
        ["name"]: getCustomersViewState.data.name,
        ["mobileNumber"]: getCustomersViewState.data.mobileNumber,
        ["fatherName"]: getCustomersViewState.data.fatherName,
      });
    }
  }, [getCustomersViewState]);

  useEffect(() => {
    form.setFieldsValue({
      name: "",
      fatherName: "",
      mobileNumber: "",
    });
  }, []);

  useEffect(() => {
    if (updateCustomersState.apiState === "success") {
      message.success(updateCustomersState.message);
      navigate("/customers/list");
    }

    if (updateCustomersState.apiState === "error") {
      updateCustomersReset();
      message.error(updateCustomersState.message);
    }
  }, [updateCustomersState]);

  /* functions */
  const handleNumberChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    updateCustomers(formData);
  };

  return (
    <>
      <HeaderComponent title="Customers Edit" />
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
            loading={updateCustomersState.apiState === "loading"}
          >
            SUBMIT
          </Button>
        </Form>
      </PageContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  updateCustomersState: state.updateCustomers,
  getCustomersViewState: state.getCustomersView,
});

const mapDispatchToProps = (dispatch) => ({
  updateCustomers: (params) => dispatch(updateCustomers(params)),
  updateCustomersReset: () => dispatch(updateCustomersReset()),
  getCustomersView: (params) => dispatch(getCustomersView(params)),
  getCustomersViewReset: () => dispatch(getCustomersViewReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomersEdit);
