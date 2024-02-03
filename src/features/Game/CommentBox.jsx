import Comment from "./Comment";

function CommentBox({ comments }) {
  return (
    <div className="mb-10 max-w-3xl">
      <h1 className="text-3xl mb-1 ">Comments</h1>
      <ul>
        {comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
}

export default CommentBox;
