import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFavGame } from "../../services/apiFavGames";

export function useAddGame() {
  const queryClient = useQueryClient();

  const addGameMutation = useMutation(addFavGame, {
    onSuccess: () => {
      queryClient.invalidateQueries("favGames");
    },
  });

  const handleAddGame = async (gameId, userId) => {
    try {
      await addGameMutation.mutateAsync({ game_id: gameId, user_id: userId });
    } catch (error) {
      console.error("Error adding game to favorites:", error);
    }
  };

  return {
    handleAddGame,
    isAdding: addGameMutation.isLoading,
  };
}
