import { useUser } from "../features/auth/useUser";
import { useProfile } from "../features/Auth/useProfile";
import Loader from "../ui/Loader";

function Account() {
  const { user, isLoading } = useUser();
  const { isLoading: profileLoading, profile } = useProfile(user?.id);

  if (isLoading || profileLoading) return <Loader />;

  return (
    <div>
      <p className="text-5xl font-semibold">{profile.username} profile</p>
    </div>
  );
}

export default Account;
