import { useUser } from "../features/auth/useUser";
import { useProfile } from "../features/Auth/useProfile";
import Loader from "../ui/Loader";

function Account() {
  const { user, isLoading, isAuthenticated } = useUser();
  const { isLoading: profileLoading, profile } = useProfile(user?.id);

  if (isLoading || profileLoading) return <Loader />;
  console.log(profile.id);

  return (
    <div>
      <p className="text-3xl">{profile.username}</p>
    </div>
  );
}

export default Account;
