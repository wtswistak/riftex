import { useUser } from "../features/auth/useUser";

function Account() {
  const { user, isAuthenticated } = useUser();

  return (
    <div>
      <p>{user.username}</p>
    </div>
  );
}

export default Account;
