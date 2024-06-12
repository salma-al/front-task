import React, { useContext } from 'react';
import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react';

import GroupItem from '../components/GroupItem';
import CreateGroupModal from '../components/CreateGroupModal';
import { AddIcon } from '@chakra-ui/icons';
import { GroupsContext } from '../providers/GroupsProvider';

export default function Groups() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { groups, setGroups } = useContext(GroupsContext);

  console.log(groups);

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" mb={9} mt={3}>
        <Text fontSize="xx-large" textAlign="left" fontWeight="700">
          My Groups
        </Text>
        <Button onClick={onOpen}>
          <AddIcon w={3} h={3} mr="2" />
          Create New Group
        </Button>
      </Flex>
      {groups.length <= 0 ? (
        <Text>No groups yet!</Text>
      ) : (
        groups.map((group, i) => {
          return <GroupItem key={i} group={group} />;
        })
      )}

      <CreateGroupModal
        isOpen={isOpen}
        onClose={onClose}
        groups={groups}
        setGroups={setGroups}
      />
    </>
  );
}
