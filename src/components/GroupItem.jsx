import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import CreateGroupModal from './CreateGroupModal';

export default function Group() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        border="2px solid"
        borderColor=" gray.300"
        borderRadius="8px"
        p={4}
        mb={3}
      >
        <Flex justifyContent="space-between" alignItems="center" gap={8}>
          <Box textAlign="left" flexGrow="1">
            <Link to={`/groups/4`} w="100%">
              <Box>
                <Text as="b" fontSize="large">
                  Title
                </Text>
                <Text color="gray.600">Description</Text>
              </Box>
            </Link>
          </Box>

          <Box>
            <Stack direction="row" spacing={4} align="center">
              <Button
                colorScheme="teal"
                variant="outline"
                size="sm"
                onClick={onOpen}
              >
                Edit
              </Button>
              <Button colorScheme="red" variant="solid" size="sm">
                Delete
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Box>
      <CreateGroupModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
