import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex id="error-page" alignItems="center" justifyContent="center" h="100vh">
      <Box>
        <Text fontSize="3xl" as="b">
          Oops!
        </Text>
        <Text my="5">Sorry, an unexpected error has occurred.</Text>
        <Text as="i" color="gray.500">
          {error.statusText || error.message}
        </Text>
      </Box>
    </Flex>
  );
}
