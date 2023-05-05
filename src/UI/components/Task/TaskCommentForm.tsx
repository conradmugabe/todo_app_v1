import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CommentInput, CommentInputSchema } from "@comments/entities";
import { Button, Flex } from "@chakra-ui/react";
import Textarea from "../common/Textarea";

interface TaskCommentFormProps {
  onSubmit: (data: CommentInput) => void;
}

export default function TaskCommentForm({ onSubmit }: TaskCommentFormProps) {
  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
  } = useForm<CommentInput>({
    resolver: zodResolver(CommentInputSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection="column" gap={4}>
        <Textarea register={register} name="comment" errors={errors} />
        <Button
          type="submit"
          size="sm"
          colorScheme="yellow"
          alignSelf="start"
          isDisabled={!isValid}
        >
          Comment
        </Button>
      </Flex>
    </form>
  );
}
