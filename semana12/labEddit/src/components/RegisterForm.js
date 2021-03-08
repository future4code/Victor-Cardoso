import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { base_url } from "../constants/url";
import AuthContext from "../context/authContext";
import useForm from "../hooks/useForm";

const RegisterForm = () => {
  const { states } = useContext(AuthContext);
  const [form, handleInput, clearInput] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const registerUser = async (body, clearInput) => {
    try {
      const response = await axios.post(`${base_url}/signup`, body);
      clearInput();
      return response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const handleForm = (event) => {
    event.preventDefault();
    registerUser(form, clearInput);
  };

  return (
    <Flex
      as="form"
      direction="column"
      minW="60%"
      h="100%"
      onSubmit={handleForm}
    >
      <Heading textAlign="center">Register</Heading>
      <Input
        name={"username"}
        type="text"
        value={form.value}
        onChange={handleInput}
        placeholder="username"
      />
      <Input
        name={"email"}
        type="text"
        value={form.value}
        onChange={handleInput}
        placeholder="email"
      />
      <Input
        name={"password"}
        type="password"
        value={form.value}
        onChange={handleInput}
        placeholder="password"
      />
      <Button type="submit">Cadastrar</Button>
    </Flex>
  );
};

export default RegisterForm;
