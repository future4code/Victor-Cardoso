import React, { useContext, useEffect } from "react";
import { Box, Divider, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/authContext";

import { base_url } from "../constants/url";
import Card from "../components/Card";

const Details = () => {
  const { states, setters } = useContext(AuthContext);
  const pathParams = useParams();
  const postId = pathParams.postId;

  const getDetailsById = async (postId) => {
    try {
      const response = await axios.get(`${base_url}/posts/${postId}`, {
        headers: {
          Authorization: states.token,
        },
      });
      setters.setPost(response.data.post);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  useEffect(() => {
    getDetailsById(postId);
  }, []);

  return (
    <Flex w="100vw" maxW="600px" padding="4" direction="column" align="center">
      {!states ? (
        <Spinner size="xl" />
      ) : (
        <Card>
          <Box padding="4">
            <Heading>{states.post && states.post.title}</Heading>
            <Text>{states.post && states.post.text}</Text>
          </Box>
          <Heading as="h4" paddingX="4" fontSize="20px">
            Comments
          </Heading>
          {states.post.comments &&
            states.post.comments.map((comment) => {
              return (
                <>
                  <Box padding="2">
                    <Heading as="h5" fontSize="18px">
                      {comment.username}
                    </Heading>
                    <Text>{comment.text}</Text>
                    <Divider marginTop="4" />
                  </Box>
                </>
              );
            })}
        </Card>
      )}
    </Flex>
  );
};

export default Details;
