import { useParams } from "react-router-dom";
import { useAddComment } from "./useAddComment";
import { useState } from "react";
import { useUser } from "../auth/useUser";
import CircleLoader from "../../ui/CircleLoader";

function AddComment() {
  const { handleAddComment, isLoading } = useAddComment();
  const [showMessage, setShowMessage] = useState(false);
  const [comment, setComment] = useState("");
  const { user } = useUser();
  const gameId = useParams().id;

  if (!user) return null;

  function handleSubmit(e) {
    e.preventDefault();
    if (comment.length < 3) {
      setShowMessage(true);
      return;
    }
    handleAddComment(user.id, gameId, comment);
    setShowMessage(false);
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="add-comment"
        className="w-full mt-9 bg-neutral-800 p-2 rounded-md focus:outline-0  focus:shadow-[inset_0_0px_0px_1px_rgba(255,255,255,0.6)] duration-200 "
        placeholder="Write a comment"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        rows={4}
      />

      <button
        type="submit"
        className="mt-2 px-5 py-2 min-w-[130px] text-md flex justify-center tracking-wide font-semibold rounded-lg bg-gradient-to-r bg-[#3fa60386]  duration-200 hover:bg-[var(--c-green)]  "
        disabled={isLoading}
      >
        {isLoading ? <CircleLoader /> : "Add comment"}
      </button>
      {showMessage && (
        <p className="text-neutral-300 text-sm mt-2">Comment is too short</p>
      )}
    </form>
  );
}

export default AddComment;
