import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useInput } from "../hooks/useInput";

const Register = () => {
  const [name, handleName] = useInput();
  const [email, handleEmail] = useInput();
  const [password, handlepassword] = useInput();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Flex
      as="main"
      h="100vh"
      w="100vw"
      direction="column"
      align="center"
      justify="center"
    >
      <Flex as="form" direction="column" onSubmit={handleSubmit(onSubmit)}>
        <Heading>Register</Heading>
        <Input
          name="name"
          type="text"
          value={name}
          onChange={handleName}
          ref={register()}
          placeholder="name"
        />
        <Input
          name="email"
          type="email"
          value={email}
          onChange={handleEmail}
          ref={register()}
          placeholder="email"
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handlepassword}
          ref={register()}
          placeholder="password"
        />
        <Button type="submit">Cadastrar</Button>
      </Flex>
    </Flex>
  );
};

export default Register;
