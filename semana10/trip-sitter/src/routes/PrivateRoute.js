import React from "react";
import { useAuth } from "../hooks/useAuth";
import SignIn from "../pages/signIn";

const PrivateRoute = ({ children }) => {
  const { token, setToken } = useAuth();
  if (!token) {
    return <SignIn setToken={setToken} />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
