import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/apiProfiles";

export function useProfile(userId) {
  const { isLoading, data: profile } = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getProfile(userId),
  });

  return { isLoading, profile: profile };
}
