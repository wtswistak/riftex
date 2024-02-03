import { useProfile } from "../auth/useProfile";
import Loader from "../../ui/Loader";

function Comment({ comment }) {
  const { isLoading, profile } = useProfile(comment?.user_id);

  if (isLoading) return <Loader />;
  return (
    <li className="py-5 border-gradient relative" key={comment.id}>
      <div className="flex items-center mb-1">
        <h6 className="font-semibold text-lg mr-3 text-neutral-200">
          {profile.username}
        </h6>
        <p className="text-xs text-neutral-400">{comment.created_at}</p>
      </div>
      <p className="text-sm text-neutral-200">{comment.content}</p>
    </li>
  );
}

export default Comment;
