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
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ overflow: "initial", background: "#fff" }}>
          <HeaderComponent />
          <Outlet context={{}} />
        </Content>
      </Layout>
    </Layout>
  );
};
export default PageLayout;
