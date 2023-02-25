import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import Sidebar from "../Sidebar/Sidebar";
const { Content, Sider } = Layout;
const PageLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <HeaderComponent />
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <Sidebar />
        </Sider>
      </Layout>
      <Content>
        <Outlet context={{}} />
      </Content>
    </Layout>
  );
};
export default PageLayout;
