function CommentBox({ data }) {
  return (
    <div className="mb-10 max-w-3xl">
      <h1 className="text-3xl mb-4 ">Comments</h1>
      <ul>
        {data?.map((comment) => (
          <li className="py-4 border-gradient relative" key={comment.id}>
            <div className="flex items-center">
              <h6 className="font-semibold mr-4 text-neutral-200">
                {comment.user_id}
              </h6>
              <p className="text-xs text-neutral-400">{comment.created_at}</p>
            </div>
            <p className="text-sm">{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentBox;
