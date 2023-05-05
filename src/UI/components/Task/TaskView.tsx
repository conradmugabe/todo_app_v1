import {
  Divider,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { Task } from "@tasks/entities";
import TaskTags from "./TaskTags";
import UserTagList from "./UserTagList";
import UserTag from "./UserTag";
import TaskCommentForm from "./TaskCommentForm";
import CommentView from "../Comment/CommentView";

interface TaskViewProps {
  task: Task;
}

export default function TaskView({ task }: TaskViewProps) {
  return (
    <SimpleGrid gap={4}>
      <Heading>{task.title}</Heading>
      <Divider />
      <SimpleGrid gap={4} columns={3}>
        <Text>Created by</Text>
        <GridItem colSpan={2}>
          <UserTag
            user={{ name: "Segun Adebayo", src: "https://bit.ly/sage-adebayo" }}
          />
        </GridItem>
        <Text>Tags</Text>
        <GridItem colSpan={2}>
          <TaskTags size="md" />
        </GridItem>
      </SimpleGrid>
      <Divider />
      <Heading fontSize="md">Description</Heading>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
        quibusdam iure praesentium vero ex consectetur atque eaque nisi dolorem
        suscipit odio repudiandae, quaerat velit dicta quidem eos? Impedit, sed
        dolorum?
      </Text>
      <Divider />
      <Heading fontSize="md">Assigned to</Heading>
      <Flex gap={2} flexWrap="wrap">
        <UserTagList />
      </Flex>
      <Divider />
      <Heading fontSize="md">Comments</Heading>
      <CommentView />
      <TaskCommentForm
        // eslint-disable-next-line no-alert
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      />
    </SimpleGrid>
  );
}
