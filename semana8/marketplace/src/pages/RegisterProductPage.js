import React, { Component } from "react";
import { Flex } from "@chakra-ui/react";
import RegisterProductForm from "../components/register/RegisterProductForm";

class RegisterProductPage extends Component {
  render() {
    return (
      <Flex as="section" h="80vh">
        <RegisterProductForm />
      </Flex>
    );
  }
}

export default RegisterProductPage;
