import React, { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
