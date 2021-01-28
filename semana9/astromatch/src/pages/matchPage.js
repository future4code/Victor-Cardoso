import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Center, List, ListItem, Image, Text } from "@chakra-ui/react";

const MatchesPage = (props) => {
  const [matches, setMatches] = useState([]);

  // getMatches function
  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-cardoso-epps/matches"
      )
      .then((response) => {
        console.log(response.data.matches);
        setMatches(response.data.matches);
      });
  };

  useEffect(() => {
    getMatches();
  }, [props.matches]);

  return (
    <Center as="main" h="100%" w="100%">
      <Flex as="section" h="100%" w="100%" justify="center" align="flex-start">
        <List w="100%">
          {matches.map((match) => {
            return (
              <ListItem
                display="flex"
                alignItems="center"
                p="1rem"
                key={match.id}
                borderBottom="1px solid #ddd"
              >
                <Image
                  objectFit="cover"
                  boxSize="60px"
                  borderRadius="full"
                  src={match.photo}
                />
                <Text marginX="1rem" fontSize="1.2rem" fontWeight="bold">
                  {match.name}
                </Text>
              </ListItem>
            );
          })}
        </List>
      </Flex>
    </Center>
  );
};

export default MatchesPage;
