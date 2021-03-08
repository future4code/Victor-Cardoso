import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import useForm from "../hooks/useForm";
import { goToFeed } from "../router/routes";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const { requests } = useContext(AuthContext);
  const history = useHistory();
  const [form, handleInput, clearInput] = useForm({
    email: "",
    password: "",
  });

  const handleForm = (event) => {
    event.preventDefault();
    requests.login(form, clearInput);
    goToFeed(history);
  };

  return (
    <Flex
      as="form"
      direction="column"
      minW="60%"
      h="100%"
      onSubmit={handleForm}
    >
      <Heading textAlign="center">Login</Heading>
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
      <Button type="submit">Login</Button>
    </Flex>
  );
};

export default LoginForm;
