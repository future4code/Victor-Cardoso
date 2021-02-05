import React, { useEffect, useState } from "react";
import {
  Button,
  Center,
  Flex,
  Heading,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { goToTripDetails } from "../routes/Coordinator";
import { useHistory } from "react-router-dom";
import axios from "axios";
import TripDetails from "./tripDetails";
import PrivateRoute from "../routes/PrivateRoute";

const Trips = () => {
  const history = useHistory();
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTrips = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-epps/trips"
      );
      setTrips(response.data.trips);
      // console.log(response.data.trips);
      // return response.data;
      setIsLoading(false);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <PrivateRoute>
      <Center w="100%">
        {isLoading ? (
          <Spinner size="xl" />
        ) : (
          <Flex
            as="section"
            h="65vh"
            w="100%"
            direction="column"
            align="center"
            justify="center"
            margin="1rem"
          >
            <Heading paddingY="1.5rem">Trips dashboard</Heading>

            {trips ? (
              <Table w="80%">
                <Thead>
                  <Tr>
                    <Th fontFamily="Overpass, sans-serif" fontSize="1rem">
                      Name
                    </Th>
                    <Th fontFamily="Overpass, sans-serif" fontSize="1rem">
                      Planet
                    </Th>
                    <Th fontFamily="Overpass, sans-serif" fontSize="1rem">
                      Duration
                    </Th>
                    <Th fontFamily="Overpass, sans-serif" fontSize="1rem">
                      Date
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {trips.map((trip) => (
                    <Tr key={trip.id}>
                      <Td fontFamily="Overpass, sans-serif" fontSize="1rem">
                        <Button
                          fontFamily="Overpass, sans-serif"
                          variant="link"
                          onClick={() => goToTripDetails(history, trip.id)}
                        >
                          {trip.name}
                        </Button>
                      </Td>
                      <Td fontFamily="Overpass, sans-serif" fontSize="1rem">
                        {trip.planet}
                      </Td>
                      <Td fontFamily="Overpass, sans-serif" fontSize="1rem">
                        {trip.durationInDays} days
                      </Td>
                      <Td fontFamily="Overpass, sans-serif" fontSize="1rem">
                        {trip.date}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            ) : (
              <TripDetails />
            )}
          </Flex>
        )}
      </Center>
    </PrivateRoute>
  );
};

export default Trips;
