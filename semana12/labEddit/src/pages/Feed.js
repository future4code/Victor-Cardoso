import React, { useContext, useEffect } from "react";
import {
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Authenticated from "./Authenticated";
import Card from "../components/Card";
import AuthContext from "../context/authContext";
import CreatePost from "../components/CreatePost";
import { goToPostDetails } from "../router/routes";
import { useHistory } from "react-router-dom";

const Feed = () => {
  const history = useHistory();
  const { states, requests } = useContext(AuthContext);

  useEffect(() => {
    requests.getPosts();
  }, []);

  const goToDetails = (postId) => {
    history.push(`/feed/${postId}`);
  };

  const listaDePosts = states.posts.map((post) => {
    return (
      <Card key={post.id}>
        <Heading
          as="h5"
          fontSize="18px"
          cursor="pointer"
          onClick={() => goToDetails(post.id)}
        >
          {post.title}
        </Heading>
      </Card>
    );
  });

  return (
    <Authenticated>
      <Flex align="center" justify="center" direction="column">
        <Header />
        <Flex w="100vw" h="90vh" direction="column" align="center">
          <Heading>redr34m</Heading>
          <Flex
            w="75vw"
            maxW="600px"
            direction="column"
            align="center"
            justify="center"
          >
            <CreatePost />
            {listaDePosts.length === 0 ? <Spinner size="xl" /> : listaDePosts}
          </Flex>
        </Flex>
      </Flex>
    </Authenticated>
  );
};

export default Feed;
