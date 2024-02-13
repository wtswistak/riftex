import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment } from "../../services/apiComments";

export function useAddComment() {
  const queryClient = useQueryClient();

  const addCommentDB = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const handleAddComment = async (userId, gameId, content) => {
    try {
      await addCommentDB.mutateAsync({ userId, gameId, content });
    } catch (error) {
      console.error("Error adding comment to game:", error);
    }
  };

  return {
    handleAddComment,
    isLoading: addCommentDB.isLoading,
  };
}
