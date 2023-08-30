import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/ApiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user);
      console.log(user);
      navigate("/");
    },
    onError: (error) => {
      console.log("ERROR", error);
    },
  });

  return { mutate, isLoading };
}
