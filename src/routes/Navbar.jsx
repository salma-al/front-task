import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Flex } from '@chakra-ui/react';
import LogoIcon from '../components/LogoIcon';

export default function Navbar() {
  return (
    <>
      <Box bg="gray.100" p="4">
        <Flex alignItems="center" justifyContent="space-between">
          <Link to="/">
            {' '}
            <LogoIcon w={6} h={6} /> Group Management
          </Link>

          <Avatar name="Salma Ali" />
        </Flex>
      </Box>
    </>
  );
}
