import { useState } from "react";
import { useLogin } from "./useLogin.js";
import Loader from "../../ui/Loader";

function LoginForm() {
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("user");
  const { mutate, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    mutate({ email, password });
  }

  return (
    <form className="flex flex-col">
      <label htmlFor="Email" className="mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="rounded-sm mb-3  p-1 bg-[var(--dark-gray)]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <label htmlFor="password" className="mb-1">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="rounded-sm  p-1 bg-[var(--dark-gray)]"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      <button
        type="submit"
        className="mt-7 bg-[var(--c-green)] p-2 rounded-md text-lg"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        Log in
      </button>
      {isLoading && <Loader />}
    </form>
  );
}

export default LoginForm;
