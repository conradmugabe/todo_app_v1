import { SimpleGrid } from "@chakra-ui/react";

import { projects } from "@data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <SimpleGrid columns={3} gap={4}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </SimpleGrid>
  );
}
