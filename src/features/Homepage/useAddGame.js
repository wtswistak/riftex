import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFavGame } from "../../services/apiFavGames";

export function useAddGame() {
  const queryClient = useQueryClient();

  const addGameDB = useMutation(addFavGame, {
    onSuccess: () => {
      queryClient.invalidateQueries("favGames");
    },
  });

  const handleAddGame = async (gameId, userId) => {
    try {
      await addGameDB.mutateAsync({ gameId, userId });
    } catch (error) {
      console.error("Error adding game to favorites:", error);
    }
  };

  return {
    handleAddGame,
    isAdding: addGameDB.isLoading,
  };
}
