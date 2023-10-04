import { useState } from "react";
import { useLogin } from "./useLogin.js";
import Loader from "../../ui/Loader";
import { Link } from "react-router-dom";
import InputText from "./InputText.jsx";

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
        Log in
      </button>
      <p className="text-sm mt-2 text-[#b4b4b4]">
        You dont have account?{" "}
        <Link
          className="text-[#fff] hover:text-[var(--c-green)] duration-200"
          to="/sign-up"
        >
          Sign Up
        </Link>
      </p>
      {isLoading && <Loader />}
    </form>
  );
}

export default LoginForm;
