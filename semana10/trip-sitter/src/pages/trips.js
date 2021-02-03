import React from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { goToCreateTrip } from "../routes/Coordinator";
import { useHistory } from "react-router-dom";

const Trips = () => {
  const history = useHistory();

  return (
    <Flex as="section" h="65vh">
      <Heading>Trips dashboard</Heading>
      <Button
        colorScheme="yellowTrip.500"
        onClick={() => goToCreateTrip(history)}
      >
        create trip
      </Button>
    </Flex>
  );
};

export default Trips;
