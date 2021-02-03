import React from "react";

import { Flex } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";

const SignIn = () => {
  useAuth();
  return (
    <Flex as="section" h="65vh" w="100%" direction="column" align="center">
      <LoginForm />
    </Flex>
  );
};

export default SignIn;
