import { Button, ButtonGroup, SimpleGrid } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { ProjectInput, ProjectInputSchema } from "@projects/entities";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../common/Input";
import Textarea from "../common/Textarea";

interface ProjectFormProps {
  onSubmit: (data: ProjectInput) => void;
}

export default function ProjectForm({ onSubmit }: ProjectFormProps) {
  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
  } = useForm<ProjectInput>({ resolver: zodResolver(ProjectInputSchema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid gap={4}>
        <Input
          register={register}
          name="name"
          errors={errors}
          label="Name"
          placeholder="Name"
        />
        <Textarea
          register={register}
          name="description"
          errors={errors}
          label="Description"
          placeholder="Description"
        />
        <ButtonGroup>
          <Button
            size="sm"
            colorScheme="yellow"
            type="submit"
            isDisabled={!isValid}
          >
            Create Project
          </Button>
        </ButtonGroup>
      </SimpleGrid>
    </form>
  );
}
