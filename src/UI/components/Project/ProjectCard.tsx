import {
  Card,
  CardBody,
  CardProps,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

import { Project } from "@projects/entities";
import UserAvatarList from "../Task/UserAvatarList";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
  ...rest
}: ProjectCardProps & CardProps) {
  return (
    <Card cursor="pointer" {...rest}>
      <CardBody>
        <Flex flexDirection="column" gap={4}>
          <Heading size="lg">{project.name}</Heading>
          <Text noOfLines={4}>{project.description}</Text>
          <UserAvatarList />
        </Flex>
      </CardBody>
    </Card>
  );
}
