import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/apiProfiles";

export function useProfile(userId) {
  const { isLoading, data: profile } = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getProfile(userId),
  });
  console.log(profile);
  if (!isLoading && profile) {
    return { isLoading, profile: profile[0] };
  }

  return { isLoading, profile: null };
}
