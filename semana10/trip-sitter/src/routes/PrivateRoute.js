import { useToken } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../hooks/useAuth";
import SignIn from "../pages/signIn";

import { getToken } from "../hooks/useToken";

const PrivateRoute = ({ children }) => {
  const token = getToken();
  if (!token) {
    return <SignIn />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
