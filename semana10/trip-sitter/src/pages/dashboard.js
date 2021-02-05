import React, { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Trips from "./trips";
import Applies from "./applies";

import { useHistory, useParams } from "react-router-dom";
import PrivateRoute from "../routes/PrivateRoute";

const Dashboard = () => {
  const history = useHistory();
  const pathParams = useParams();

  useEffect(() => {
    if (!pathParams) {
      pathParams.name = "trips";
      history.push("/trips");
    }
    if (pathParams.name !== "trips" && pathParams.name !== "applies") {
      history.push("/error");
    }
  });

  return (
    <PrivateRoute>
      <Flex as="section" h="65vh">
        {pathParams.name === "applies" ? <Applies /> : <Trips />}
      </Flex>
    </PrivateRoute>
  );
};

export default Dashboard;
