import {
  Button,
  FormControl,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import AuthContext from "../context/authContext";
import useForm from "../hooks/useForm";
import Card from "./Card";

const CreatePost = () => {
  const { requests } = useContext(AuthContext);
  const [form, handleInput, clearInput] = useForm({
    title: "",
    text: "",
  });

  const handleForm = (event) => {
    event.preventDefault();
    requests.createPost(form);
    clearInput();
  };

  return (
    <Card>
      <Heading as="h4" fontSize="20px">
        Create a post
      </Heading>
      <FormControl
        as="form"
        display="flex"
        flexDirection="column"
        onSubmit={handleForm}
      >
        <Input
          placeholder="Title"
          name={"title"}
          type="text"
          value={form.value}
          onChange={handleInput}
        />
        <Textarea
          placeholder="Content"
          name={"text"}
          type="text"
          value={form.value}
          onChange={handleInput}
        />
        <Button type="submit" alignSelf="flex-end">
          Post
        </Button>
      </FormControl>
    </Card>
  );
};

export default CreatePost;
