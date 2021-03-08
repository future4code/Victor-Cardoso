import { Flex, Heading, Text } from "@chakra-ui/react";
import Header from "../components/Header";

const Home = () => {
  return (
    <Flex
      h="100vh"
      w="100vw"
      align="center"
      justify="center"
      direction="column"
    >
      <Header />
      <Flex h="90vh" w="100vw" direction="column" align="center">
        <Heading>redr34m</Heading>
        <Text>home</Text>
      </Flex>
    </Flex>
  );
};

export default Home;
