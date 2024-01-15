import { useState } from "react";
import Loader from "../../ui/Loader";
import { useSignUp } from "./useSignUp";
import AuthInput from "../Auth/AuthInput";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { mutate, isLoading, emailExists } = useSignUp();

  function handleSubmit(e) {
    e.preventDefault();
    mutate({ email, password, username });
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <AuthInput
        value={email}
        setValue={setEmail}
        isLoading={isLoading}
        type="email"
      />
      <AuthInput
        value={username}
        setValue={setUsername}
        isLoading={isLoading}
        type="username"
      />
      <AuthInput
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
      {emailExists && (
        <p className="text-red-500 text-sm mt-2">Email already exists</p>
      )}
    </form>
  );
}

export default SignUpForm;
