import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Image, Text } from "@chakra-ui/react";

const SwipeCard = (props) => {
  const [person, setPerson] = useState({});

  // getPerson matches
  const getPerson = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-cardoso-epps/person"
      )
      .then((response) => {
        console.log(response.data.profile);
        setPerson(response.data.profile);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  // useEffect
  useEffect(() => {
    getPerson();
  }, [props.person]);

  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      alignItems="flex-end"
      justifyContent="flex-end"
      boxShadow="1px 3px 5px grey"
      borderRadius="5px"
      bgImage={`url('${person.photo}')`}
      bgRepeat="no-repeat"
      padding="1.5rem"
    >
      {/* <Image borderTopRadius="5px" src={person.photo} alt="" /> */}
      <Text
        color="white"
        fontSize="2rem"
        fontWeight="bold"
        textShadow="1px 1px 1px #1e1e1e"
      >
        {person.name}
      </Text>
    </Flex>
  );
};

export default SwipeCard;
