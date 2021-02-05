import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";

const ApplyForm = () => {
  const { handleSubmit, errors, register } = useForm();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [applicationText, setApplicationText] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");

  const onSubmit = () => {
    createApply();
  };

  const createApply = async () => {
    const apply = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: country,
    };

    try {
      const response = await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-epps/trips/:id/apply",
        apply
      );
      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <Flex
      as="form"
      w="80%"
      maxH="700px"
      maxW="600px"
      padding="1.5rem"
      direction="column"
      borderRadius="5px"
      border="1px solid white"
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
          <FormLabel>age</FormLabel>
          <Input
            marginBottom="1rem"
            bgColor="rgba(247, 255, 247, 0.08)"
            _focus={{
              bgColor: "rgba(247, 255, 247, 0.3)",
            }}
            _hover={{
              bgColor: "rgba(247, 255, 247, 0.3)",
            }}
            name="age"
            type="number"
            ref={register({ required: true })}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {errors.age && <span>erro no age</span>}
        </Box>
      </Flex>

      <Flex w="100%" justify="space-between">
        <Box w="45%">
          <FormLabel>occupation</FormLabel>
          <Input
            marginBottom="1rem"
            bgColor="rgba(247, 255, 247, 0.08)"
            _focus={{
              bgColor: "rgba(247, 255, 247, 0.3)",
            }}
            _hover={{
              bgColor: "rgba(247, 255, 247, 0.3)",
            }}
            name="profession"
            type="text"
            ref={register({ required: true })}
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
          {errors.profession && <span>erro no profession</span>}
        </Box>

        <Box w="45%">
          <FormLabel>country</FormLabel>
          <Input
            marginBottom="1rem"
            bgColor="rgba(247, 255, 247, 0.08)"
            _focus={{
              bgColor: "rgba(247, 255, 247, 0.3)",
            }}
            _hover={{
              bgColor: "rgba(247, 255, 247, 0.3)",
            }}
            name="country"
            type="text"
            ref={register({ required: true })}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          {errors.country && <span>erro no country</span>}
        </Box>
      </Flex>

      {/* <FormLabel>trip</FormLabel>
      <Input
        marginBottom="1rem"
        bgColor="rgba(247, 255, 247, 0.08)"
        _focus={{
          bgColor: "rgba(247, 255, 247, 0.3)",
        }}
        _hover={{
          bgColor: "rgba(247, 255, 247, 0.3)",
        }}
        name="trip"
        type="text"
        ref={register({ required: true })}
        value={trip}
        onChange={(e) => setTrip(e.target.value)}
      />
      {errors.trip && <span>erro no trip</span>} */}

      <FormLabel>applicationText</FormLabel>
      <Textarea
        marginBottom="1rem"
        bgColor="rgba(247, 255, 247, 0.08)"
        _focus={{
          bgColor: "rgba(247, 255, 247, 0.3)",
        }}
        _hover={{
          bgColor: "rgba(247, 255, 247, 0.3)",
        }}
        name="applicationText"
        type="text"
        ref={register({ required: true })}
        value={applicationText}
        onChange={(e) => setApplicationText(e.target.value)}
      />
      {errors.applicationText && <span>erro no applicationText</span>}
      <Button type="submit">Apply</Button>
    </Flex>
  );
};

export default ApplyForm;
