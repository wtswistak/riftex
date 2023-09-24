import { useQuery } from "@tanstack/react-query";
import { getFavGames } from "../../services/apiFavGames";

export function useFavGames(userId) {
  const { isLoading: favGamesLoading, data: favGames } = useQuery({
    queryKey: ["favGames", userId],
    queryFn: () => getFavGames(userId),
  });
  return { favGamesLoading, favGames };
}
