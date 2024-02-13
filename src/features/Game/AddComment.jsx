import { useParams } from "react-router-dom";
import { useAddComment } from "./useAddComment";
import { useState } from "react";
import { useUser } from "../auth/useUser";

function AddComment() {
  const { handleAddComment, isLoading } = useAddComment();
  const [comment, setComment] = useState("");
  const { user } = useUser();
  const gameId = useParams().id;

  function addComment(e) {
    e.preventDefault();
    handleAddComment(user.id, gameId, comment);
    setComment("");
  }
  return (
    <form>
      <textarea
        rows={4}
        id="add-comment"
        className="w-full mt-9 bg-neutral-800 p-2 rounded-md focus:outline-0  focus:shadow-[inset_0_0px_0px_1px_rgba(255,255,255,0.6)] duration-200 "
        placeholder="Write a comment"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <button
        type="submit"
        className="mt-2 text-sm bg-gradient-to-r bg-[#3fa60386]  duration-200 hover:bg-[var(--c-green)] text-white px-5 py-2 rounded-lg "
        onClick={(e) => {
          addComment(e);
        }}
      >
        Add Comment
      </button>
    </form>
  );
}

export default AddComment;
