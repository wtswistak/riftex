import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../services/apiComments";

export function useGetComments(userId, gameId) {
  const { isLoading: commentLoading, data: commentData } = useQuery({
    queryKey: ["comments", userId, gameId],
    queryFn: () => getComments(userId, gameId),
  });

  return { commentLoading, commentData };
}
