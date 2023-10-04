import SignUpForm from "../features/SignUp/SignUpForm";
import AuthLayout from "../features/auth/AuthLayout";

function SignUp() {
  return (
    <AuthLayout type="Create ">
      <SignUpForm />
    </AuthLayout>
  );
}

export default SignUp;
