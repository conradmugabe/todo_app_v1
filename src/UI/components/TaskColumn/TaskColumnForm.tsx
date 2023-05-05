import { Button, ButtonGroup, SimpleGrid } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { TaskColumnInput, TaskColumnInputSchema } from "@tasks/entities";
import Input from "../common/Input";
import Textarea from "../common/Textarea";

interface TaskColumnFormProps {
  onSubmit: (data: TaskColumnInput) => void;
}

export default function TaskColumnForm({ onSubmit }: TaskColumnFormProps) {
  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
  } = useForm<TaskColumnInput>({
    resolver: zodResolver(TaskColumnInputSchema),
  });

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
        <Input
          register={register}
          name="colorScheme"
          errors={errors}
          label="Pick Color Scheme:"
          type="color"
        />
        <ButtonGroup>
          <Button
            size="sm"
            type="submit"
            colorScheme="yellow"
            isDisabled={!isValid}
          >
            Create Task Column
          </Button>
        </ButtonGroup>
      </SimpleGrid>
    </form>
  );
}
