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

export default function GroupItem({ group }) {
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
          <Flex
            direction="column"
            justifyContent="space-between"
            minH="90px"
            flexGrow="1"
          >
            <Link to={`/groups/${group.id}`} w="100%" state={{name: group.groupName}}>
              <Text textAlign="left" color="gray.600" fontSize="small" mb={4}>
                {group.createdAt}
              </Text>

              <Flex textAlign="left">
                <Box>
                  <Text as="b" fontSize="large">
                    {group.groupName}
                  </Text>
                  <Text color="gray.600">{group.description}</Text>
                </Box>
              </Flex>
            </Link>
          </Flex>

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
