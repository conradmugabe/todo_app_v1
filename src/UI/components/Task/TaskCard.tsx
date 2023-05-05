import {
  Card,
  CardBody,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Task } from "@tasks/entities";
import { IoDocumentAttach } from "react-icons/io5";
import { TfiCommentAlt } from "react-icons/tfi";

import UserAvatarList from "./UserAvatarList";
import TaskCardStat from "./TaskCardStat";
import TaskTags from "./TaskTags";
import Drawer from "../common/Drawer";
import TaskView from "./TaskView";

type TaskProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card cursor="pointer" onClick={onOpen}>
        <CardBody>
          <SimpleGrid gap={4}>
            <Heading size="md" noOfLines={1}>
              {task.title}
            </Heading>
            <Text fontSize="sm" noOfLines={3}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              quibusdam iure praesentium vero ex consectetur atque eaque nisi
              dolorem suscipit odio repudiandae, quaerat velit dicta quidem eos?
              Impedit, sed dolorum?
            </Text>
            <TaskTags />
            <Flex alignItems="center" justifyContent="space-between">
              <UserAvatarList />
              <Flex alignItems="center" gap={4}>
                <TaskCardStat
                  Icon={IoDocumentAttach}
                  count={10}
                  tooltipLabel="document(s)"
                />
                <TaskCardStat
                  Icon={TfiCommentAlt}
                  count={3}
                  tooltipLabel="comment(s)"
                />
              </Flex>
            </Flex>
          </SimpleGrid>
        </CardBody>
      </Card>
      <Drawer isOpen={isOpen} onClose={onClose} size="lg">
        <TaskView task={task} />
      </Drawer>
    </>
  );
}
