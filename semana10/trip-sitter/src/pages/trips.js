import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { goToCreateTrip } from "../routes/Coordinator";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Trips = () => {
  const history = useHistory();
  const [trips, setTrips] = useState([]);

  const getTrips = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-epps/trips"
      );
      setTrips(response.data.trips);
      console.log(response.data.trips);
      // return response.data;
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <Flex
      as="section"
      h="65vh"
      w="100%"
      direction="column"
      align="center"
      justify="center"
    >
      <Heading>Trips dashboard</Heading>
      <Button
        colorScheme="yellowTrip.500"
        onClick={() => goToCreateTrip(history)}
      >
        create trip
      </Button>

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
                {trip.name}
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
    </Flex>
  );
};

export default Trips;