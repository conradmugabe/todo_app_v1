import { Button, Container, Flex, useDisclosure } from "@chakra-ui/react";
import ProjectForm from "@ui/components/Project/ProjectForm";
import ProjectGrid from "@ui/components/Project/ProjectGrid";
import Drawer from "@ui/components/common/Drawer";

export default function ProjectsPage() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Container maxWidth="container.xl">
        <Flex flexDirection="column" gap={4} paddingY={4}>
          <Button
            alignSelf="start"
            colorScheme="yellow"
            size="sm"
            onClick={onOpen}
          >
            Create Project
          </Button>
          <ProjectGrid />
        </Flex>
      </Container>
      <Drawer isOpen={isOpen} onClose={onClose} label="Create Project">
        <ProjectForm
          // eslint-disable-next-line no-alert
          onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        />
      </Drawer>
    </>
  );
}
