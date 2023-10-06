import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/apiSignUp";
import { addProfile } from "../../services/apiProfiles";
import { useState } from "react";

export function useSignUp() {
  const navigate = useNavigate();
  const [emailExists, setEmailExists] = useState(false);

  const { mutate, isLoading } = useMutation({
    mutationFn: async ({ email, password, username }) => {
      const user = await signUp({ email, password });
      const userId = user?.data.user.id;
      const emailDb = user?.emailExists;
      setEmailExists(emailDb);

      if (!emailDb) {
        await addProfile({
          id: userId,
          username,
        });
      }

      return user;
    },
    onSuccess: (user) => {
      if (!user.emailExists) {
        navigate("/", { replace: true });
      }
    },
    onError: (error) => {
      console.log("ERROR", error);
    },
  });

  return { mutate, isLoading, emailExists };
}
