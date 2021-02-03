import React from "react";

import { Flex } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

const SignIn = () => {
  return (
    <Flex as="section" h="65vh" w="100%" direction="column" align="center">
      <LoginForm />
    </Flex>
  );
};

export default SignIn;
