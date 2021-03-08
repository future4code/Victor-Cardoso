import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <Flex
      as="main"
      h="100vh"
      w="100vw"
      direction="column"
      align="center"
      justify="space-evenly"
    >
      <Header />
      <RegisterForm />
    </Flex>
  );
};

export default Register;
