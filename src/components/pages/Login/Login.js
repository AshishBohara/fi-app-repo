import React, { useEffect, useState } from "react";
import { Button, Input, Form, Alert, InputNumber } from "antd";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// component
import { Container, Box } from "./LoginStyle";
import { SendIcon } from "../../CustomIcons";
// action
import { login } from "../../../action/loginAction";

const Login = (props) => {
  // variables
  const { login, loginState } = props;
  const [formData, setFormData] = useState({
    mobileNumber: "",
    password: "",
  });
  const navigate = useNavigate();
  // callbacks
  useEffect(() => {
    if (loginState.apiState === "success") {
      loginState.apiState = "";
      localStorage.setItem("FiUserToken", loginState.data.token);
      localStorage.setItem("FiUser", JSON.stringify(loginState.data.user));
      navigate("/customers/list");
    }
  }, [loginState]);

  // functions
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleNumberChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  const onFormSubmit = () => {
    login(formData);
  };

  return (
    <>
      <Container>
        <Box>
          <br />
          {loginState.apiState === "error" && (
            <Alert message={loginState.errorMessage} type="error" showIcon />
          )}
          <br />

          <Form layout="vertical" onFinish={onFormSubmit}>
            <Form.Item
              name="mobileNumber"
              rules={[
                { required: true, message: "Required" },
                { type: "mobileNumber", message: "Mobile Number is not valid" },
              ]}
            >
              <InputNumber
                name="mobileNumber"
                placeholder="Mobile Number"
                style={{ width: "100%" }}
                onChange={(v) => handleNumberChange("mobileNumber", v)}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input.Password
                name="password"
                placeholder="Password"
                onChange={handleOnChange}
              />
            </Form.Item>

            <Button
              htmlType="submit"
              type="primary"
              block
              icon={<SendIcon />}
              loading={loginState.apiState === "loading" ? true : false}
            >
              LOGIN
            </Button>
          </Form>
        </Box>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({ loginState: state.login });

const mapDispatchToProps = (dispatch) => ({
  login: (params) => dispatch(login(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
