import { useQuery } from "@tanstack/react-query";
import { notesService } from "@tasks/service";

// eslint-disable-next-line import/prefer-default-export
export const useTasks = () =>
  useQuery({
    queryKey: ["todos"],
    queryFn: () => notesService.getMany({ params: { _limit: 2 } }),
  });
