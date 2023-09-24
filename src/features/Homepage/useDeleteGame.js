import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFavGame } from "../../services/apiFavGames";

export function useDeleteGame() {
  const queryClient = useQueryClient();

  const deleteGameDB = useMutation(deleteFavGame, {
    onSuccess: () => {
      queryClient.invalidateQueries("favGames");
    },
  });

  const handleDeleteGame = async (gameId, userId) => {
    try {
      await deleteGameDB.mutateAsync({ gameId, userId });
    } catch (error) {
      console.error("Error delete game from favorites:", error);
    }
  };

  return {
    handleDeleteGame,
    isDeleting: deleteGameDB.isLoading,
  };
}
