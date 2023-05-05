import { Button, Flex, useDisclosure } from "@chakra-ui/react";

import { useTasks } from "@ui/hooks/useTasks";
import TaskColumn from "@ui/components/TaskColumn/TaskColumn";
import Drawer from "@ui/components/common/Drawer";
import TaskColumnForm from "@ui/components/TaskColumn/TaskColumnForm";

export default function TasksPage() {
  const { data } = useTasks();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex padding={4} alignItems="center">
        <Button
          colorScheme="yellow"
          loadingText="Loading"
          size="sm"
          spinnerPlacement="start"
          marginBottom={4}
          onClick={onOpen}
        >
          Add Task Column
        </Button>
      </Flex>
      <Flex gap={8} flexWrap="nowrap" overflowX="auto" paddingX={4}>
        <TaskColumn tasks={data || []} />
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <TaskColumnForm
          // eslint-disable-next-line no-alert
          onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        />
      </Drawer>
    </>
  );
}
