import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink, useParams } from 'react-router-dom';

export default function Post() {
  const { groupId } = useParams();

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

      <Text
        fontSize="xx-large"
        textAlign="left"
        fontWeight="700"
        mt={3}
        mb={10}
      >
        My Groups
      </Text>

      <Text textAlign="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate
        harum quo reiciendis, et perferendis accusamus nulla, rerum ad magnam
        maiores quam blanditiis totam, reprehenderit minima similique excepturi
        consequatur tempora?
      </Text>
    </>
  );
}
