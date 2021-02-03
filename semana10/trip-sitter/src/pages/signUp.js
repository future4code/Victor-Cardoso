import React from "react";

import { Flex } from "@chakra-ui/react";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <Flex as="section" h="65vh" w="100%" direction="column" align="center">
      <SignUpForm />
    </Flex>
  );
};

export default SignUp;
