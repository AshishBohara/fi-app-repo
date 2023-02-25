import React, { useEffect, useState } from "react";
import { Button, Input, Form, Alert } from "antd";
import { ShopFilled } from "@ant-design/icons";
import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

// component
import { Container, Box } from "./LoginStyle";
import { SendIcon } from "../../CustomIcons";
import { FlexDiv } from "../../Xcomponent";
// action
import { login } from "../../../action/loginAction";

const Login = (props) => {
  // variables
  const { login, loginState } = props;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // callbacks
  useEffect(() => {
    if (loginState.apiState === "success") {
      loginState.apiState = "";
      localStorage.setItem("BtwUserToken", loginState.data.token);
      localStorage.setItem("BtwUser", JSON.stringify(loginState.data.user));
      navigate("/dashboard");
    }
  }, [loginState.apiState]);

  // functions
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              name="email"
              rules={[
                { required: true, message: "Required" },
                { type: "email", message: "Email is not valid" },
              ]}
            >
              <Input
                name="email"
                placeholder="Email"
                onChange={handleOnChange}
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
