import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../services/apiComments";

export function useGetComments(gameId) {
  const { isLoading: commentLoading, data: commentData } = useQuery({
    queryKey: ["comments", gameId],
    queryFn: () => getComments(gameId),
  });

  return { commentLoading, commentData };
}
