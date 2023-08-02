import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function HeaderInput() {
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className="bg-neutral-700 flex items-center rounded-full px-4 "
      onSubmit={handleSubmit}
    >
      <FiSearch color="var(--c-gray-light)" />{" "}
      <input
        placeholder="Search game"
        className="placeholder:text-[--c-gray-light] h-11 text-sm focus:outline-none focus:ring-yellow-500 px-2 bg-neutral-700"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default HeaderInput;
