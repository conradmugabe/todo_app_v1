import { Button, Container, Flex } from "@chakra-ui/react";
import ProjectGrid from "@ui/components/Project/ProjectGrid";

export default function ProjectsPage() {
  return (
    <Container maxWidth="container.xl">
      <Flex flexDirection="column" gap={4} paddingY={4}>
        <Button alignSelf="start" colorScheme="yellow" size="sm">
          Create Project
        </Button>
        <ProjectGrid />
      </Flex>
    </Container>
  );
}
