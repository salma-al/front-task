import React from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';

export default function Root() {
  return (
    <>
      <Navbar />
      <Box p="4">
        <Outlet />
      </Box>
    </>
  );
}
