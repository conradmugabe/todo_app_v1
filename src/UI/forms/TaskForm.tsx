import { zodResolver } from "@hookform/resolvers/zod";
import { Button, ButtonGroup, SimpleGrid } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { TaskInput, TaskInputSchema } from "@tasks/entities";
import Input from "@components/Input";
import Textarea from "@components/Textarea";

type Props = {
  isLoading: boolean;
  onSubmit: (data: TaskInput) => void;
  onCancel?: () => void;
};

export default function TaskForm({ isLoading, onSubmit, onCancel }: Props) {
  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
  } = useForm<TaskInput>({
    resolver: zodResolver(TaskInputSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid gap={4}>
        <Input register={register} name="title" errors={errors} label="Name" />
        <Textarea
          register={register}
          name="description"
          errors={errors}
          label="Description"
        />
        <ButtonGroup>
          <Button
            size="sm"
            type="submit"
            colorScheme="yellow"
            isLoading={isLoading}
            isDisabled={!isValid}
          >
            Create Task
          </Button>
          <Button size="sm" onClick={onCancel}>
            Cancel
          </Button>
        </ButtonGroup>
      </SimpleGrid>
    </form>
  );
}
