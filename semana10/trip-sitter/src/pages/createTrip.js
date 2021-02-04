import React from "react";
import { Flex } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";
import PrivateRoute from "../routes/PrivateRoute";

const CreateTrip = () => {
  // useAuth();
  return (
    // <PrivateRoute>
    <Flex as="section" h="65vh">
      Create Trip
    </Flex>
    // </PrivateRoute>
  );
};

export default CreateTrip;
