import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <>
      <Box bg="gray.100" p="4">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>GM</Box>
        </Flex>
      </Box>
    </>
  );
}
