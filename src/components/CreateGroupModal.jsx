import React from 'react';
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
}) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    const groupData = {
      ...data,
      id: Date.now(),
      createdAt: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    };

    // console.log(groupData);

    setGroups([...groups, groupData]);

    reset();
    onClose();
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Create New Group</ModalHeader>
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
                Save
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
