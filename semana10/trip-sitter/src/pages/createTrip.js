import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import PrivateRoute from "../routes/PrivateRoute";
import CreateTripForm from "../components/CreateTripForm";

const CreateTrip = () => {
  return (
    <PrivateRoute>
      <Flex
        as="section"
        h="65vh"
        w="100%"
        direction="column"
        justify="center"
        align="center"
      >
        <Heading>Create Trip</Heading>
        <CreateTripForm />
      </Flex>
    </PrivateRoute>
  );
};

export default CreateTrip;
