import {
  Box,
  Flex,
  Heading,
  IconButton,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { Task } from "@tasks/entities";
import { IoAdd } from "react-icons/io5";
import TaskForm from "@ui/forms/TaskForm";
import TaskCard from "../Task/TaskCard";
import Drawer from "../common/Drawer";

interface TaskColumnProps {
  tasks: Task[];
}

export default function TaskColumn({ tasks }: TaskColumnProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box borderRadius="2xl" overflow="hidden" flex="0 0 auto" width="96">
        <Flex
          bgColor="blackAlpha.500"
          padding={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading fontSize="md">In Progress</Heading>
          <Tooltip label="Add Task">
            <IconButton
              size="sm"
              variant="ghost"
              borderRadius="full"
              aria-label="open create task modal"
              icon={<IoAdd size={24} />}
              onClick={onOpen}
            />
          </Tooltip>
        </Flex>
        <Flex
          flexDirection="column"
          padding={4}
          gap={2}
          bgColor="blackAlpha.200"
        >
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Flex>
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} label="Create New Task Column">
        <TaskForm
          // eslint-disable-next-line no-alert
          onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          isLoading={false}
        />
      </Drawer>
    </>
  );
}
