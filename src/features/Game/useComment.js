import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../services/apiComments";

export function useGetComments(gameId) {
  const { isLoading: commentsLoading, data: comments } = useQuery({
    queryKey: ["comments", gameId],
    queryFn: () => getComments(gameId),
  });

  return { commentsLoading, comments };
}
