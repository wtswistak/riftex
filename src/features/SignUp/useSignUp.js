import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/apiSignUp";
import { addProfile } from "../../services/apiProfiles";

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: async ({ email, password, username }) => {
      const user = await signUp({ email, password });
      const userId = user?.user.id;
      await addProfile({
        id: userId,
        username,
      });
      return user;
    },
    onSuccess: (user) => {
      navigate("/", { replace: true });
    },
    onError: (error) => {
      console.log("ERROR", error);
    },
  });

  return { mutate, isLoading };
}
