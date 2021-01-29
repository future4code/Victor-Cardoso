import { HiHeart, HiStar, HiX } from "react-icons/hi";
import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";

import axios from "axios";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch";

const nomeAluno = "victor-cardoso-epps";
const endPoint = "choose-person";

const Footer = (props) => {
  // POST: choosePerson
  const choosePerson = (personId, choiceMade) => {
    const body = {
      id: personId,
      choice: choiceMade,
    };

    console.log(body);

    axios
      .post(`${baseUrl}/${nomeAluno}/${endPoint}`, body)
      .then((response) => {
        console.log(response);
        // console.log(response.data.isMatch);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onClickLike = (id) => {
    const choice = true;
    choosePerson(id, choice);
    props.getPerson();
  };

  const onClickNope = (id) => {
    const choice = false;
    choosePerson(id, choice);
    props.getPerson();
  };

  return (
    <Flex
      as="footer"
      w="100%"
      h="100%"
      maxH="10vh"
      marginBottom="1rem"
      justify="space-evenly"
      align="center"
    >
      <IconButton
        padding="1.8rem 1rem"
        fontSize="1.8rem"
        borderRadius="50%"
        colorScheme="red"
        icon={<HiX />}
        onClick={() => onClickNope(props.person.id)}
      />
      <IconButton
        padding="1.5rem .7rem"
        fontSize="1.8rem"
        borderRadius="50%"
        colorScheme="blue"
        icon={<HiStar />}
      />
      <IconButton
        padding="1.8rem 1rem"
        fontSize="1.8rem"
        borderRadius="50%"
        colorScheme="green"
        icon={<HiHeart />}
        onClick={() => onClickLike(props.person.id)}
      />
    </Flex>
  );
};

export default Footer;
