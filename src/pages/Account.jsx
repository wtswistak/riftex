import { useUser } from "../features/auth/useUser";
import { useProfile } from "../features/Auth/useProfile";

function Account() {
  const { user, isAuthenticated } = useUser();
  const { isLoading: profileLoading, profile } = useProfile(user.id);

  console.log(profile.id);

  return (
    <div>
      <p>{profile.username}</p>
    </div>
  );
}

export default Account;
