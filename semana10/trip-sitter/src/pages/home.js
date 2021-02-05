import React, { useEffect } from "react";

import { Button, Flex, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const goToApply = () => {
    history.push("/tripApply");
  };

  useEffect(() => {}, []);

  return (
    <Flex
      as="section"
      h="65vh"
      direction="column"
      align="center"
      justify="center"
    >
      <Heading>HOME</Heading>

      <Button
        colorScheme="yellowTrip"
        color="blackTrip.100"
        fontSize="1.2rem"
        fontWeight="600"
        _hover={{ color: "yellowTrip.700", bgColor: "purpleTrip.400" }}
        _active={{ color: "yellowTrip.500", bgColor: "purpleTrip.200" }}
        onClick={() => goToApply()}
      >
        apply
      </Button>
    </Flex>
  );
};

export default Home;
