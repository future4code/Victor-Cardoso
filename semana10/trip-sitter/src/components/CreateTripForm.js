import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Textarea,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getToken } from "../hooks/useToken";

const CreateTripForm = () => {
  const { handleSubmit, errors, register } = useForm();
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState(0);
  const [durationInDays, setDurationInDays] = useState(0);
  const [description, setDescription] = useState("");

  const token = getToken();

  // TO DO: handleSubmit function
  const onSubmit = () => {
    createTrip();
  };

  // TO DO: createTrip function
  const createTrip = async () => {
    const trip = {
      name: name,
      planet: planet,
      date: date,
      durationInDays: durationInDays,
      description: description,
    };
    console.log(token);
    try {
      const response = await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-epps/trips",
        trip,
        {
          headers: {
            auth: token,
          },
        }
      );
      console.log(response.data);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <Flex w="80%" direction="column">
      <Flex
        as="form"
        w="100%"
        direction="column"
        justify="space-between"
        border="1px solid white"
        borderRadius="5px"
        padding="1.5rem"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex w="100%" justify="space-between">
          <Box w="45%">
            <FormLabel>name</FormLabel>
            <Input
              marginBottom="1rem"
              bgColor="rgba(247, 255, 247, 0.08)"
              _focus={{
                bgColor: "rgba(247, 255, 247, 0.3)",
              }}
              _hover={{
                bgColor: "rgba(247, 255, 247, 0.3)",
              }}
              name="name"
              type="text"
              ref={register({ required: true })}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span>erro no name</span>}
          </Box>

          <Box w="45%">
            <FormLabel>planet</FormLabel>
            <Input
              marginBottom="1rem"
              bgColor="rgba(247, 255, 247, 0.08)"
              _focus={{
                bgColor: "rgba(247, 255, 247, 0.3)",
              }}
              _hover={{
                bgColor: "rgba(247, 255, 247, 0.3)",
              }}
              name="planet"
              type="name"
              ref={register({ required: true })}
              value={planet}
              onChange={(e) => setPlanet(e.target.value)}
            />
            {errors.planet && <span>erro no planet</span>}
          </Box>
        </Flex>
        <Flex w="100%" justify="space-between">
          <Box w="45%">
            <FormLabel>date</FormLabel>
            <Input
              marginBottom="1rem"
              bgColor="rgba(247, 255, 247, 0.08)"
              _focus={{
                bgColor: "rgba(247, 255, 247, 0.3)",
              }}
              _hover={{
                bgColor: "rgba(247, 255, 247, 0.3)",
              }}
              name="date"
              type="text"
              ref={register({ required: true })}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && <span>erro no date</span>}
          </Box>

          <Box w="45%">
            <FormLabel>duration</FormLabel>
            <Input
              marginBottom="1rem"
              bgColor="rgba(247, 255, 247, 0.08)"
              _focus={{
                bgColor: "rgba(247, 255, 247, 0.3)",
              }}
              _hover={{
                bgColor: "rgba(247, 255, 247, 0.3)",
              }}
              name="planet"
              type="text"
              ref={register({ required: true })}
              value={durationInDays}
              onChange={(e) => setDurationInDays(e.target.value)}
            />
            {errors.durationInDays && <span>erro no durationInDays</span>}
          </Box>
        </Flex>
        <Flex w="100%" direction="column">
          <FormLabel>description</FormLabel>
          <Textarea
            marginBottom="1rem"
            bgColor="rgba(247, 255, 247, 0.08)"
            _focus={{
              bgColor: "rgba(247, 255, 247, 0.3)",
            }}
            _hover={{
              bgColor: "rgba(247, 255, 247, 0.3)",
            }}
            name="description"
            type="text"
            ref={register({ required: true })}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <span>erro no description</span>}
        </Flex>
        <Flex w="100%" justify="flex-end">
          <Button colorScheme="yellowTrip" color="blackTrip.100" type="submit">
            create
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CreateTripForm;
