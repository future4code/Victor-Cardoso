import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import Authenticated from "./Authenticated";

const Login = () => {
  return (
    <Authenticated>
      <Flex
        h="100vh"
        w="100vw"
        align="center"
        justify="center"
        direction="column"
      >
        <Header />
        <LoginForm />
      </Flex>
    </Authenticated>
  );
};

export default Login;
