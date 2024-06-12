import React, { useContext } from 'react';
import { AddIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  useDisclosure,
  Link as ChakraLink,
} from '@chakra-ui/react';

import PostItem from '../components/PostItem';
import CreatePostModal from '../components/CreatePostModal';
import { PostsContext } from '../providers/PostsProvider';

export default function Posts() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { posts, setPosts } = useContext(PostsContext);

  let { state } = useLocation();

  return (
    <>
      <Box textAlign="left" mb={5} mt={3}>
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          color="gray.600"
          fontWeight="600"
        >
          <ArrowBackIcon mr={2} />
          Back to all groups
        </ChakraLink>
      </Box>

      <Flex alignItems="center" justifyContent="space-between" mb={10}>
        <Box>
          <Text
            fontSize="xx-large"
            textAlign="left"
            fontWeight="700"
            mt={3}
            mb={2}
          >
            My Posts
          </Text>
          <Text fontSize="large" textAlign="left" fontWeight="600">
            {state?.name}
          </Text>
        </Box>

        <Button onClick={onOpen}>
          <AddIcon w={3} h={3} mr="2" />
          Create New Post
        </Button>
      </Flex>

      {posts.length <= 0 ? (
        <Text>No posts yet!</Text>
      ) : (
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          {posts.map((post, i) => (
            <PostItem key={i} post={post} />
          ))}
        </Grid>
      )}

      <CreatePostModal
        isOpen={isOpen}
        onClose={onClose}
        posts={posts}
        setPosts={setPosts}
      />
    </>
  );
}
