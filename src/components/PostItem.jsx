import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';

export default function Post() {
  const { groupId } = useParams();

  return (
    <Link style={{ minHeight: '120px' }} to={`/groups/${groupId}/posts/4`}>
      <Box
        border="2px solid"
        borderColor=" gray.300"
        borderRadius="8px"
        p={4}
        h="100%"
        _hover={{
          border: '2px solid',
          borderColor: 'gray.600',
        }}
      >
        <Flex
          textAlign="left"
          justifyContent="space-between"
          direction="column"
          h="100%"
        >
          <Text as="b" fontSize="large">
            Title
          </Text>
          <Text color="gray.600">Description</Text>
        </Flex>
      </Box>
    </Link>
  );
}
