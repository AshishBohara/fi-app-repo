import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { notification } from "antd";

const Logout = (props) => {
  useEffect(() => {
    localStorage.removeItem("FiUserToken");
    localStorage.removeItem("FiUser");
    console.log("hello");
    notification.success({
      message: "You are logged out successfully.",
      placement: "bottomRight",
    });
  }, []);

  return <Navigate to="/" replace />;
};

export default Logout;
