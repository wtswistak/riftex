import AddComment from "./AddComment";
import Comment from "./Comment";

function CommentsBox({ comments }) {
  return (
    <div className="mb-10 max-w-3xl">
      <h1 className="text-3xl mb-1 ">Comments</h1>
      {comments?.length ? (
        <ul>
          {comments?.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      ) : (
        <p className="mt-3">No comments yet</p>
      )}
      <AddComment />
    </div>
  );
}

export default CommentsBox;
