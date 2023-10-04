import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/apiSignUp";

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => signUp({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      navigate("/", { replace: true });
    },
    onError: (error) => {
      console.log("ERROR", error);
    },
  });

  return { mutate, isLoading };
}
