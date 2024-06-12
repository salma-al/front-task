import React from 'react';
import { Text } from '@chakra-ui/react';

import Group from '../components/GroupItem';

export default function Groups() {
  return (
    <>
    <Text fontSize="xx-large" textAlign="left" fontWeight="700" mt={3} mb={7}>My Groups</Text>
      <Group />
      <Group />
    </>
  );
}
