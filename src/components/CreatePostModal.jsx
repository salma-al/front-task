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

export default function CreatePostModal({ isOpen, onClose, setPosts, posts }) {
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    const postData = {
      ...data,
      id: Date.now(),
      createdAt: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    };

    setPosts([...posts, postData]);

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
            <ModalHeader>Create New Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Post name</FormLabel>
                <Input
                  placeholder="Post name"
                  {...register('postName', {
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
                <FormLabel>Content:</FormLabel>
                <Textarea {...register('content')} placeholder="Content" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Post
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
