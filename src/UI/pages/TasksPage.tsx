import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { TaskInput } from "@tasks/entities";
import TaskForm from "@forms/TaskForm";

export default function TasksPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // eslint-disable-next-line no-alert
  const onSubmit = (data: TaskInput) => alert(JSON.stringify(data, null, 2));

  return (
    <>
      <Button
        colorScheme="blue"
        loadingText="Loading"
        size="sm"
        spinnerPlacement="start"
        onClick={onOpen}
      >
        Add Task
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton colorScheme="red" borderRadius="full" />
          <DrawerHeader>Create Task</DrawerHeader>
          <DrawerBody>
            <TaskForm
              isLoading={false}
              onSubmit={onSubmit}
              onCancel={onClose}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
