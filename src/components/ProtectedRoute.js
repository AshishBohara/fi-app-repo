import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from "../utils";

const ProtectedRoute = ({ redirectPath = "/" }) => {
  if (!isLogin()) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
