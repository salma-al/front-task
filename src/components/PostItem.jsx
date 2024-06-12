import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';

export default function PostItem({ post }) {
  const { groupId } = useParams();

  return (
    <Link
      style={{ minHeight: '120px' }}
      to={`/groups/${groupId}/posts/${post.id}`}
      state={{post}}
    >
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
            {post.postName}
          </Text>
          <Text color="gray.600">{post?.content}</Text>
        </Flex>
      </Box>
    </Link>
  );
}
