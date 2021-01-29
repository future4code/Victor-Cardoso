import React, { useState, useEffect } from "react";
import { Flex, Center, Image, Text, Button } from "@chakra-ui/react";

import axios from "axios";

import ProfileImage from "../img/imgProfile.jpeg";
import useGetMatches from "../hooks/useGetMatches";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch";

const nomeAluno = "victor-cardoso-epps";
const endpoint = "clear";

const ProfilePage = () => {
  const updateMatches = useGetMatches();

  // console.log(updateMatches);

  const clearMatches = async () => {
    try {
      const response = await axios.put(`${baseUrl}/${nomeAluno}/${endpoint}`);
      console.log("All matches cleared!");
      updateMatches();
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // useEffect(updateMatches);

  return (
    <Center as="main" h="100%" w="100%">
      <Flex
        as="section"
        h="100%"
        w="100%"
        direction="column"
        justify="space-evenly"
        align="center"
        p="2rem"
      >
        <Image
          boxSize="250px"
          objectFit="cover"
          borderRadius="full"
          src={ProfileImage}
        />
        <Text>Victor</Text>
        <Button
          onClick={() => clearMatches()}
          variant="outline"
          colorScheme="pink"
        >
          Clear Matches
        </Button>
      </Flex>
    </Center>
  );
};

export default ProfilePage;
