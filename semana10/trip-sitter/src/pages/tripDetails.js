import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Text,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Spinner,
} from "@chakra-ui/react";

import { CheckIcon, NotAllowedIcon } from "@chakra-ui/icons";

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
  const [isLoading, setIsLoading] = useState(false);

  const getTripDetails = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-epps/trip/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      );
      // console.log(response.data.trip.candidates);
      // console.log(response.data.trip);
      setTripDetails(response.data.trip);
      setCandidates(response.data.trip.candidates);
      setIsLoading(false);
      // console.log(tripDetails);
    } catch (err) {
      throw new Error(err);
    }
  };

  const approveCandidate = async (candidateId) => {
    const approve = {
      approve: true,
    };
    try {
      const response = await axios.put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-epps/trips/${tripDetails.id}/candidates/${candidateId}/decide`,
        approve,
        {
          headers: {
            auth: token,
          },
        }
      );
      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  const disapproveCandidate = async (candidateId) => {
    const approve = {
      approve: false,
    };
    try {
      const response = await axios.put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-epps/trips/${tripDetails.id}/candidates/${candidateId}/decide`,
        approve,
        {
          headers: {
            auth: token,
          },
        }
      );
      return response;
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
        justify="center"
      >
        {isLoading ? (
          <Spinner size="xl" />
        ) : (
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
              color="yellowTrip.700"
              _hover={{ color: "yellowTrip.500" }}
              _selected={{ color: "yellowTrip.500" }}
              onClick={onOpen}
            >
              See Applies
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size="lg">
              <ModalContent
                color="blackTrip.100"
                fontFamily="Overpass, sans-serif"
              >
                <ModalHeader>
                  <Heading as="h3" fontSize="1.6rem" paddingY="1rem">
                    {tripDetails.name}
                  </Heading>
                  <Heading as="h4" fontSize="1.2rem" paddingTop="1rem">
                    Candidates
                  </Heading>
                </ModalHeader>
                <ModalCloseButton onClick={onClose} />
                <ModalBody>
                  <Flex direction="column">
                    {candidates.map((candidate) => {
                      return (
                        <Flex key={candidate.id}>
                          <Flex
                            direction="column"
                            justify="center"
                            paddingY="1rem"
                          >
                            <Text>Name: {candidate.name}</Text>
                            <Text>Age: {candidate.age}</Text>
                            <Text>Occupation: {candidate.profession}</Text>
                            <Text>Country: {candidate.country}</Text>
                            <Text>
                              Application message: {candidate.applicationText}
                            </Text>
                          </Flex>
                          <Flex paddingY="1.5rem">
                            <Button
                              marginX=".5rem"
                              bgColor="yellowTrip.700"
                              color="blackTrip.200"
                              _hover={{
                                color: "blackTrip.100",
                                bgColor: "yellowTrip.500",
                              }}
                              _active={{
                                color: "blackTrip.100",
                                bgColor: "yellowTrip.500",
                              }}
                              onClick={() => approveCandidate(candidate.id)}
                            >
                              <CheckIcon />
                            </Button>
                            <Button
                              bgColor="yellowTrip.700"
                              color="blackTrip.200"
                              _hover={{
                                color: "blackTrip.100",
                                bgColor: "yellowTrip.500",
                              }}
                              _active={{
                                color: "blackTrip.100",
                                bgColor: "yellowTrip.500",
                              }}
                              onClick={() => disapproveCandidate(candidate.id)}
                            >
                              <NotAllowedIcon />
                            </Button>
                          </Flex>
                        </Flex>
                      );
                    })}
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Flex>
        )}
      </Flex>
    </PrivateRoute>
  );
};

export default TripDetails;
