import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const Sidebar = (props) => {
  return (
    <div>
      <div style={{ padding: "16px 8px", textAlign: "center" }}>
        <h1 style={{ color: "#fff" }}>LOGO</h1>
      </div>
      <Menu mode="inline" theme="dark">
        <Menu.SubMenu title="Master" key="Master">
          <Menu.Item key="interest_rate">
            <Link to="/interest_rate/list">Interest Rate</Link>
          </Menu.Item>
          <Menu.Item key="penalty">
            <Link to="/penalty/list">Penalty</Link>
          </Menu.Item>
          <Menu.Item key="loan-charges">
            <Link to="/loan-charges/list">Loan Charges</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="customers">
          <Link to="/customers/list">Customer</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
