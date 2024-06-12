import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Text, Link as ChakraLink } from '@chakra-ui/react';
import {
  Link as ReactRouterLink,
  useLocation,
  useParams,
} from 'react-router-dom';

export default function Post() {
  const { groupId } = useParams();
  let { state } = useLocation();

  return (
    <>
      <Box textAlign="left" mb={5} mt={3}>
        <ChakraLink
          as={ReactRouterLink}
          to={`/groups/${groupId}`}
          color="gray.600"
          fontWeight="600"
        >
          <ArrowBackIcon mr={2} />
          Back to all posts
        </ChakraLink>
      </Box>

      <Text fontSize="xx-large" textAlign="left" fontWeight="700" my={3}>
        {state?.post?.postName}
      </Text>
      <Text
        fontSize="small"
        textAlign="left"
        fontWeight="600"
        color="gray.500"
        mt={3}
        mb={10}
      >
        {state?.post?.createdAt}
      </Text>

      <Text textAlign="left">{state?.post?.content}</Text>
    </>
  );
}
