import React, { useEffect } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function CreateGroupModal({
  isOpen,
  onClose,
  setGroups,
  groups,
  group,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    if (group) {
      setValue('groupName', group.groupName);
      setValue('description', group.description);
    } else {
      reset();
    }
  }, [group, setValue, reset]);

  const onSubmit = (data) => {
    if (group) {
      const newGroup = groups?.map((g) => {
        return g.id === group.id ? { ...g, ...data } : g;
      });

      setGroups(newGroup);
    } else {
      const groupData = {
        ...data,
        id: Date.now(),
        createdAt: new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }),
      };
      setGroups([...groups, groupData]);
    }
    reset();
    onClose();
  };

  const handleClose = () => {
    // reset();
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
              {' '}
              {group ? 'Update Group' : 'Create New Group'}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Group name</FormLabel>
                <Input
                  placeholder="Group name"
                  {...register('groupName', {
                    required: 'Name is required',
                  })}
                />
                {errors.groupName && (
                  <Text fontSize="small" color="red.700" mt={1}>
                    {errors.groupName?.message}
                  </Text>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description:</FormLabel>
                <Textarea
                  {...register('description')}
                  placeholder="Description"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                {group ? 'Update' : 'Save'}
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
