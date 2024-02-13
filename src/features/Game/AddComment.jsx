function AddComment() {
  return (
    <form>
      <textarea
        rows={4}
        id="add-comment"
        className="w-full mt-9 bg-neutral-800 p-2 rounded-md focus:outline-0  focus:shadow-[inset_0_0px_0px_1px_rgba(255,255,255,0.6)] duration-200 "
        placeholder="Write a comment"
      />
      <button
        type="submit"
        className="mt-2 text-sm bg-gradient-to-r bg-[#3fa60386]  duration-200 hover:bg-[var(--c-green)] text-white px-5 py-2 rounded-lg "
      >
        Add Comment
      </button>
    </form>
  );
}

export default AddComment;
