import React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react';

import CreateGroupModal from '../components/CreateGroupModal';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="gray.100" p="4">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>GM</Box>
          <Button onClick={onOpen}>
            <AddIcon w={3} h={3} mr="2" />
            Create New Group
          </Button>
        </Flex>
      </Box>
      <CreateGroupModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
