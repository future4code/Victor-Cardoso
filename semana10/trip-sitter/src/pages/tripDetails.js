import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { getToken } from "../hooks/useToken";
import PrivateRoute from "../routes/PrivateRoute";

const TripDetails = () => {
  const pathParams = useParams();
  const [tripDetails, setTripDetails] = useState({});
  const [candidates, setCandidates] = useState([]);
  const token = getToken();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getTripDetails = async (id) => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-epps/trip/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      );
      // console.log(response.data.trip);
      setTripDetails(response.data.trip);
      setCandidates(response.data.trip.candidates);
      // console.log(tripDetails);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    getTripDetails(pathParams.tripId);
  }, []);

  return (
    <PrivateRoute>
      <Flex
        as="section"
        h="65vh"
        direction="column"
        align="center"
        justify="flex-start"
      >
        <Flex
          as="article"
          direction="column"
          border="1px solid whiteTrip"
          w="80%"
        >
          <Heading as="h1" paddingY="1rem">
            {tripDetails.name}
          </Heading>
          <Heading as="h2" fontSize="1.2rem" paddingY="1rem">
            Details
          </Heading>
          <Text>Planet: {tripDetails.planet}</Text>
          <Text>Description: {tripDetails.description}</Text>
          <Text>Trip duration: {tripDetails.durationInDays} days</Text>
          <Text>Date: {tripDetails.date}</Text>
          <Button
            alignSelf="flex-start"
            variant="link"
            paddingY=".5rem"
            onClick={onOpen}
          >
            Applies
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent
              color="blackTrip.100"
              fontFamily="Overpass, sans-serif"
            >
              <ModalHeader>
                <Heading as="h3" fontSize="1rem" paddingY="1rem">
                  Trip applies
                </Heading>
              </ModalHeader>
              <ModalCloseButton onClick={onClose} />
              <ModalBody>
                <Flex direction="column">
                  {candidates.map((candidate) => {
                    return (
                      <Flex key={candidate.id}>
                        <Text>{candidate.name}</Text>
                      </Flex>
                    );
                  })}
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </PrivateRoute>
  );
};

export default TripDetails;
