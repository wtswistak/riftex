import { useState } from "react";
import Loader from "../../ui/Loader";
import InputText from "../Auth/InputText";
import { useSignUp } from "./useSignUp";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isLoading } = useSignUp();

  function handleSubmit(e) {
    e.preventDefault();
    mutate({ email, password });
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <InputText
        value={email}
        setValue={setEmail}
        isLoading={isLoading}
        type="email"
      />
      <InputText
        value={password}
        setValue={setPassword}
        isLoading={isLoading}
        type="password"
      />
      <button
        type="submit"
        className="mt-7 bg-[var(--c-green)] p-2 rounded-md text-lg"
        disabled={isLoading}
      >
        Sign Up
      </button>

      {isLoading && <Loader />}
    </form>
  );
}

export default SignUpForm;
